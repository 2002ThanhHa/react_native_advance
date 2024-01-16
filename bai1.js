"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TamGiac = void 0;
var TamGiac = /** @class */ (function () {
    function TamGiac(ma, mb, mc) {
        this.ma = ma;
        this.mb = mb;
        this.mc = mc;
    }
    TamGiac.prototype.setMa = function (ma) {
        this.ma = ma;
    };
    TamGiac.prototype.getMa = function () {
        return this.ma;
    };
    TamGiac.prototype.setMb = function (mb) {
        this.mb = mb;
    };
    TamGiac.prototype.getMb = function () {
        return this.mb;
    };
    TamGiac.prototype.setMc = function (mc) {
        this.mc = mc;
    };
    TamGiac.prototype.getMc = function () {
        return this.mc;
    };
    TamGiac.prototype.toString = function () {
        return "Tam giac abc c\u00F3 a = ".concat(this.ma, " b =  ").concat(this.mb, " c = ").concat(this.mc);
    };
    TamGiac.prototype.tinhChuVi = function () {
        var ChuVi = this.ma + this.mb + this.mc;
        console.log(ChuVi);
    };
    TamGiac.prototype.tinhDienTich = function () {
        var NuaChuVi = (this.ma + this.mb + this.mc) / 2;
        var DienTich = Math.sqrt(NuaChuVi *
            (NuaChuVi - this.ma) *
            (NuaChuVi - this.mb) *
            (NuaChuVi - this.mc));
        console.log(DienTich);
    };
    TamGiac.prototype.checkTamGiac = function () {
        if (this.ma + this.mb > this.mc &&
            this.ma + this.mc > this.mb &&
            this.mb + this.mc > this.ma) {
            return console.log("a, b, c la tam giac");
        }
        return console.log("a ,b, c khong la tam giac tam giac");
    };
    TamGiac.prototype.typeTamGiac = function () {
        if (!(this.ma + this.mb > this.mc &&
            this.ma + this.mc > this.mb &&
            this.mb + this.mc > this.ma)) {
            return console.log("a, b, c khong la tam giac");
        }
        else {
            if (this.ma === this.mb && this.mb === this.mc) {
                return console.log("Tam Giac Deu");
            }
            else if ((this.ma === this.mb && this.mb !== this.mc) ||
                (this.mc === this.ma && this.ma !== this.mb)) {
                return console.log("Tam Giac Can");
            }
            else if (Math.pow(this.ma, 2) + Math.pow(this.mb, 2) === Math.pow(this.mc, 2) ||
                Math.pow(this.ma, 2) + Math.pow(this.mc, 2) === Math.pow(this.mb, 2) ||
                Math.pow(this.mb, 2) + Math.pow(this.mc, 2) === Math.pow(this.ma, 2)) {
                return console.log("Tam Giac Vuong");
            }
            else {
                return console.log("Tam Giac Thuong");
            }
        }
    };
    return TamGiac;
}());
exports.TamGiac = TamGiac;
var tg = new TamGiac(4, 2, 3);
tg.tinhChuVi();
tg.tinhDienTich();
tg.checkTamGiac();
tg.typeTamGiac();
