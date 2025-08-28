import LoginButton from './components/loginButton';
import LoginTitle from './components/loginTitle';

export default function LoginPage() {
  return (
    <>
      <main className="mx-auto flex w-screen min-w-[1366px] items-center justify-center bg-gray-100">
        <section className="mx-auto my-[6.9rem] flex w-[74.4rem] flex-col items-center border border-gray-400 bg-white px-[22.2rem] py-[12.7rem]">
          <LoginTitle />
          <LoginButton />
        </section>
      </main>
    </>
  );
}
