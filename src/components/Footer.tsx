export default function Footer() {
  return (
<footer className="footer w-full min-w-0 p-4 border-t-3 bg-blue-700 flex justify-center">
    <p className="text-md">JetRent © {new Date().getFullYear()} - All right reserved</p>
</footer>
  );
}