// app/(auth)/layout.tsx

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ใช้ div ธรรมดา ครอบหน้า auth ทั้งหมด
    <div className="wc-auth-body">
      {children}
    </div>
  );
}
