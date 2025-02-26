export const Footer = () => {
    return (
        <footer className="py-12 bg-black/80 text-center">
        <div className="container mx-auto">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Solomon Yalew
          </p>
        </div>
      </footer>
    )
}