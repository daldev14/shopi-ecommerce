import { useRef, useState } from "react";
import useAppContext from "../../hooks/useAppContext";

export default function MyAccount() {
  const [view, setView] = useState("show-user-info");
  const { account, createAccount } = useAppContext();
  const editFormRef = useRef();

  const toggleEditAccount = () => setView("show-edit-account");

  const toggleShowAccount = () => setView("show-user-info");

  const handlerSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(editFormRef.current);
    createAccount({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
    toggleShowAccount();
  };

  const viewShowUserInfo = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Name: </span>
          <span>{account?.name}</span>
        </p>
        <p>
          <span className="font-light text-sm">Email: </span>
          <span>{account?.email}</span>
        </p>
        <button
          className="border border-black rounded-lg mt-6 py-3"
          onClick={toggleEditAccount}
        >
          Edit
        </button>
      </div>
    );
  };

  const viewEditAccount = () => {
    return (
      <form
        ref={editFormRef}
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
            defaultValue={account?.name}
            placeholder="Peter"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
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
            defaultValue={account?.email}
            placeholder="hi@helloworld.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
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
            defaultValue={account?.password}
            placeholder="******"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <button
          className="bg-black text-white w-full rounded-lg py-3"
          type="submit"
          onClick={() => alert("Account updated")}
        >
          Edit
        </button>
      </form>
    );
  };

  const renderView = () =>
    view === "show-edit-account" ? viewEditAccount() : viewShowUserInfo();

  return (
    <section className="grid place-content-center place-items-center gap-3">
      <div className="flex justify-start items-center w-80">
        {view === "show-edit-account" ? (
          <button className="group" onClick={toggleShowAccount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l14 0"></path>
              <path d="M5 12l4 4"></path>
              <path d="M5 12l4 -4"></path>
            </svg>
          </button>
        ) : (
          ""
        )}
        <h1 className="font-medium text-xl text-center flex-1">My account</h1>
      </div>
      {renderView()}
    </section>
  );
}
