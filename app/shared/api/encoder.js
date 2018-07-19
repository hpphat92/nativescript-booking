"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
    tslib_1.__extends(CustomHttpUrlEncodingCodec, _super);
    function CustomHttpUrlEncodingCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
        k = _super.prototype.encodeKey.call(this, k);
        return k.replace(/\+/gi, '%2B');
    };
    CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
        v = _super.prototype.encodeValue.call(this, v);
        return v.replace(/\+/gi, '%2B');
    };
    return CustomHttpUrlEncodingCodec;
}(http_1.HttpUrlEncodingCodec));
exports.CustomHttpUrlEncodingCodec = CustomHttpUrlEncodingCodec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuY29kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUksNkNBQTREO0FBRWhFOzs7O0VBSUU7QUFDRjtJQUFnRCxzREFBb0I7SUFBcEU7O0lBU0EsQ0FBQztJQVJHLDhDQUFTLEdBQVQsVUFBVSxDQUFTO1FBQ2YsQ0FBQyxHQUFHLGlCQUFNLFNBQVMsWUFBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELGdEQUFXLEdBQVgsVUFBWSxDQUFTO1FBQ2pCLENBQUMsR0FBRyxpQkFBTSxXQUFXLFlBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTCxpQ0FBQztBQUFELENBQUMsQUFURCxDQUFnRCwyQkFBb0IsR0FTbkU7QUFUWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW1wb3J0IHsgSHR0cFVybEVuY29kaW5nQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbi8qKlxuKiBDdXN0b21IdHRwVXJsRW5jb2RpbmdDb2RlY1xuKiBGaXggcGx1cyBzaWduICgrKSBub3QgZW5jb2RpbmcsIHNvIHNlbnQgYXMgYmxhbmsgc3BhY2VcbiogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMTA1OCNpc3N1ZWNvbW1lbnQtMjQ3MzY3MzE4XG4qL1xuZXhwb3J0IGNsYXNzIEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjIGV4dGVuZHMgSHR0cFVybEVuY29kaW5nQ29kZWMge1xuICAgIGVuY29kZUtleShrOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBrID0gc3VwZXIuZW5jb2RlS2V5KGspO1xuICAgICAgICByZXR1cm4gay5yZXBsYWNlKC9cXCsvZ2ksICclMkInKTtcbiAgICB9XG4gICAgZW5jb2RlVmFsdWUodjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgdiA9IHN1cGVyLmVuY29kZVZhbHVlKHYpO1xuICAgICAgICByZXR1cm4gdi5yZXBsYWNlKC9cXCsvZ2ksICclMkInKTtcbiAgICB9XG59XG5cbiJdfQ==