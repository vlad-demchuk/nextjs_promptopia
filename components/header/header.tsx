import Logo from '@components/header/logo';
import Nav from '@components/header/nav';

export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between px-10 py-4 mx-auto">
        <Logo
          withTitle={true}
          linkTo="/"
        />
        <Nav />
      </div>
    </header>
  );
}
