'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function (require) {
    var fs = require('fs');
    var filesearch = {
        findLessImportsInFile: function findLessImportsInFile(f) {
            if (fs.statSync(f) && fs.statSync(f).isFile() === false) return [];else {
                var m = void 0,
                    files = [];
                var fileContent = fs.readFileSync(f, 'utf8');
                var re = /@import (\(reference\) )?['"](.*?)['"];/g;
                while (m = re.exec(fileContent)) {
                    var _m = m,
                        _m2 = _slicedToArray(_m, 3),
                        filename = _m2[2];
                    // console.log('found import ' + filename);


                    if (m) files.push(filename);
                }
                return files;
            }
        }
    };
    return filesearch;
});