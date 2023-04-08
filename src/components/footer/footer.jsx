function Footer() {
  return (
    <footer className="mt-10 flex flex-row gap-4 justify-center ">
      <p className="text-center text-gray-400 ">
        &copy; {new Date().getFullYear()} - Carlos Medina.
      </p>
      <a className="text-center text-gray-400" href="https://github.com/Carlosmedina06">
        <p>GitHub</p>
      </a>

      <a className="text-center text-gray-400 " href="https://www.linkedin.com/in/carlosmedina06/">
        <p>LinkedIn</p>
      </a>
    </footer>
  )
}

export default Footer
