import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

export default function SignIn() {
  const [view, setView] = useState("show-user-info");
  const { account, setSignOut, createAccount } = useAppContext();
  const createFormRef = useRef();
  const hasUserAccount = Object.keys(account).length === 0 ? false : true;
  const navigate = useNavigate();

  const toggleCrearAccount = () => setView("show-create-account");

  const handlerSingIn = () => {
    setSignOut(true);
    navigate("/");
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(createFormRef.current);
    createAccount({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
    handlerSingIn();
  };

  const viewShowUserInfo = () => {
    return (
      <>
        <div className="flex flex-col w-80">
          <p>
            <span className="font-light text-sm">Email: </span>
            <span>{account.email}</span>
          </p>
          <p>
            <span className="font-light text-sm">Password: </span>
            <span>{account.password}</span>
          </p>
          <button
            className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
            onClick={() => handlerSingIn()}
            disabled={!hasUserAccount}
          >
            Log in
          </button>
          <div className="text-center">
            <button className="font-light text-xs underline underline-offset-4">
              Forgot my password
            </button>
          </div>
          <button
            className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
            onClick={() => toggleCrearAccount("show-create-user")}
          >
            Sign up
          </button>
        </div>
      </>
    );
  };

  const viewCreateUser = () => {
    return (
      <>
        <form
          ref={createFormRef}
          onSubmit={handlerSubmit}
          className="flex flex-col gap-4 w-80"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-light text-sm">
              Your name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Peter"
              className="rounded-lg border border-black placeholder:font-light
            placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-light text-sm">
              Your email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="hi@helloworld.com"
              className="rounded-lg border border-black
            placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-light text-sm">
              Your password:
            </label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="******"
              className="rounded-lg border border-black
            placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
            />
          </div>
          <button className="bg-black text-white w-full rounded-lg py-3">
            Create
          </button>
        </form>
      </>
    );
  };

  const renderView = () =>
    view === "show-user-info" ? viewShowUserInfo() : viewCreateUser();

  return (
    <section className="grid place-content-center">
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {renderView()}
    </section>
  );
}
