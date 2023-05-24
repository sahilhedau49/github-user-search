import React from "react";

const User = ({ username, image, url, name, public_repos, bio, followers }) => {
  return (
    <div className="w-[50vw] md:w-[90vw] md:p-6 rounded-xl my-14 p-10 mx-auto bg-white bg-opacity-10">
      <div>
        <img
          className="w-[12vw] md:w-[26vw] rounded-full mx-auto"
          src={image}
          alt="User Image"
        />
      </div>
      <div className="data mt-8 text-center">
        <h2 className="text-3xl font-semibold pb-3">{name}</h2>
        {bio != null && <p>{bio}</p>}
        <p className="mt-3">
          Followes: <span className="text-lg font-medium">{followers}</span>
        </p>
        <p>
          Public Repositories:{" "}
          <span className="text-lg font-medium">{public_repos}</span>
        </p>
      </div>
      <div className="flex mt-4 justify-center">
        <p className="mr-4">Visit here 💫</p>
        <a
          className="underline text-slate-300 decoration-1"
          href={url}
          target="_blank"
        >
          {username}
        </a>
      </div>
    </div>
  );
};

export default User;
