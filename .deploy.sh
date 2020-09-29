#!/bin/bash
# Split on "/", ref: http://stackoverflow.com/a/5257398/689223
REPO_SLUG_ARRAY=(${TRAVIS_REPO_SLUG//\// })
REPO_OWNER=${REPO_SLUG_ARRAY[0]}
REPO_NAME=${REPO_SLUG_ARRAY[1]}
DEPLOY_PATH=.


DEPLOY_SUBDOMAIN_UNFORMATTED_LIST=()
if [ "$TRAVIS_PULL_REQUEST" != "false" ]
then
  DEPLOY_SUBDOMAIN_UNFORMATTED_LIST+=(pull-request-${TRAVIS_PULL_REQUEST})
# scripts for push and tag servers, currently PR viewing is only needed but will leave these here.

# elif [ -n "${TRAVIS_TAG// }" ] #TAG is not empty
# then
#   #sorts the tags and picks the latest
#   #sort -V does not work on the travis machine
#   #sort -V              ref: http://stackoverflow.com/a/14273595/689223
#   #sort -t ...          ref: http://stackoverflow.com/a/4495368/689223
#   #reverse with sed     ref: http://stackoverflow.com/a/744093/689223
#   #git tags | ignore release candidates | sort versions | reverse | pick first line
#   LATEST_TAG=`git tag | grep -v rc | sort -t. -k 1,1n -k 2,2n -k 3,3n -k 4,4n | sed '1!G;h;$!d' | sed -n 1p`
#   echo $LATEST_TAG
#   if [ "$TRAVIS_TAG" == "$LATEST_TAG" ]
#   then
#     DEPLOY_SUBDOMAIN_UNFORMATTED_LIST+=(latest)
#   fi
#   DEPLOY_SUBDOMAIN_UNFORMATTED_LIST+=(${TRAVIS_TAG}-tag)
# else
#   DEPLOY_SUBDOMAIN_UNFORMATTED_LIST+=(${TRAVIS_BRANCH}-branch)
fi

for DEPLOY_SUBDOMAIN_UNFORMATTED in "${DEPLOY_SUBDOMAIN_UNFORMATTED_LIST[@]}"
do
  echo $DEPLOY_SUBDOMAIN_UNFORMATTED
  DEPLOY_SUBDOMAIN=`echo "$DEPLOY_SUBDOMAIN_UNFORMATTED" | sed -r 's/[\/|\.]+/\-/g'`
  DEPLOY_DOMAIN=http://${DEPLOY_SUBDOMAIN}.${REPO_NAME}.surge.sh
  surge --project ${DEPLOY_PATH} --domain $DEPLOY_DOMAIN;
  if [ "$TRAVIS_PULL_REQUEST" != "false" ]
  then
    GITHUB_STATUS_COMMENT=https://api.github.com/repos/${TRAVIS_REPO_SLUG}/statuses/${TRAVIS_PULL_REQUEST_SHA}
    curl -H "Authorization: token ${GITHUB_API_TOKEN}" --request POST ${GITHUB_STATUS_COMMENT} --data '{"state": "success", "target_url": "'${DEPLOY_DOMAIN}'", "description": "Pull Request Deployed!", "context": "CollectiveDynamicDeploy"}'
    # GITHUB_PR_COMMENTS=https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments
    # curl -H "Authorization: token ${GITHUB_API_TOKEN}" --request POST ${GITHUB_PR_COMMENTS} --data '{"body":"Pull Request Deployed at: '${DEPLOY_DOMAIN}'"}'
    # Slack Integration
    curl -X POST --data-urlencode "payload={\"username\": \"CollectiveDeployBot\",\"text\": \"Pull Request '${TRAVIS_PULL_REQUEST_BRANCH}' of '${REPO_NAME}' deployed at ${DEPLOY_DOMAIN}\", \"icon_emoji\": \":monkey_face:\"}" https://hooks.slack.com/services/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
  fi
done