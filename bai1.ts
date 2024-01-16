export class TamGiac {
  constructor(private ma: number, private mb: number, private mc: number) {}

  public setMa(ma: number): void {
    this.ma = ma;
  }

  public getMa(): number {
    return this.ma;
  }

  public setMb(mb: number): void {
    this.mb = mb;
  }

  public getMb(): number {
    return this.mb;
  }

  public setMc(mc: number): void {
    this.mc = mc;
  }

  public getMc(): number {
    return this.mc;
  }
  public toString(): string {
    return `Tam giac abc có a = ${this.ma} b =  ${this.mb} c = ${this.mc}`;
  }

  tinhChuVi() {
    var ChuVi = this.ma + this.mb + this.mc;
    console.log(ChuVi);
  }

  tinhDienTich() {
    var NuaChuVi = (this.ma + this.mb + this.mc) / 2;
    var DienTich = Math.sqrt(
      NuaChuVi *
        (NuaChuVi - this.ma) *
        (NuaChuVi - this.mb) *
        (NuaChuVi - this.mc)
    );

    console.log(DienTich);
  }

  checkTamGiac() {
    if (
      this.ma + this.mb > this.mc &&
      this.ma + this.mc > this.mb &&
      this.mb + this.mc > this.ma
    ) {
      return console.log("a, b, c la tam giac");
    }
    return console.log("a ,b, c khong la tam giac tam giac");
  }
  typeTamGiac() {
    if (
      !(this.ma + this.mb > this.mc &&
      this.ma + this.mc > this.mb &&
      this.mb + this.mc > this.ma)
    ) {
      return console.log("a, b, c khong la tam giac");
    } else {
      if (this.ma === this.mb && this.mb === this.mc) {
        return console.log("Tam Giac Deu");
      } else if (
        (this.ma === this.mb && this.mb !== this.mc) ||
        (this.mc === this.ma && this.ma !== this.mb)
      ) {
        return console.log("Tam Giac Can");
      } else if (
        Math.pow(this.ma, 2) + Math.pow(this.mb, 2) === Math.pow(this.mc, 2) ||
        Math.pow(this.ma, 2) + Math.pow(this.mc, 2) === Math.pow(this.mb, 2) ||
        Math.pow(this.mb, 2) + Math.pow(this.mc, 2) === Math.pow(this.ma, 2)
      ) {
        return console.log("Tam Giac Vuong");
      } else {
        return console.log("Tam Giac Thuong");
      }
    }
  }
}

const tg = new TamGiac(4, 2, 3);
tg.tinhChuVi();
tg.tinhDienTich();
tg.checkTamGiac();
tg.typeTamGiac();