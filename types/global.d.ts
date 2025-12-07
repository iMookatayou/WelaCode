// global.d.ts

// ให้รู้จัก CSS Module เช่น Login.module.css, Register.module.css
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// ถ้าอยากให้ import ไฟล์ .css ธรรมดาได้ด้วย
declare module "*.css";
