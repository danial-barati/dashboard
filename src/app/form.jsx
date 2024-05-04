import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      if (values.username === "admin" && values.password === "admin") {
        await router.push("/dashboard"); // Redirect to dashboard if login is successful
      } else {
        setError("Invalid username or password");
      }
    },
  });

  // Render the component only if router is available (client-side)
  if (!router) {
    return null;
  }
  const PinkSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#38d39f",
      "&:hover": {
        backgroundColor: alpha("#38d39f", theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#38d39f",
    },
  }));

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <div className="md:w-1/2 md:my-0 my-10 w-full">
      <div className="max-w-[350px] ms-5">
        <h1 className="text-[28px] capitalize font-medium">
          sign in to dashboard
        </h1>
        <span className="text-[#b3b3b3] flex  mb-6">
          you can sign in to admin panel and analyse your statistic.
        </span>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="w-full  bg-inherit border-b-2 py-2 placeholder:text-[14px] mb-3 ps-1 outline-none"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500">{formik.errors.username}</div>
            ) : null}
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full  bg-inherit border-b-2 py-2 placeholder:text-[14px] mb-5 ps-1 outline-none"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mt-3">
            <h3 className="text-[14px] cursor-default text-[#b3b3b3]">
              Hint: <br />
              username and password are both admin
            </h3>
          </div>
          <div className="flex justify-between my-4">
            <div className="flex">
              <PinkSwitch {...label} defaultChecked />
              <p className="capitalize text-[14px] w-fit pt-2  text-[gray]">
                remember me
              </p>
            </div>
            <div>
              <span className="text-[14px] cursor-pointer underline capitalize hover:no-underline text-[gray] pt-2 flex">
                forgot password
              </span>
            </div>
          </div>
          <button
            className="w-full capitalize text-white bg-[#38d39f] text-[17px] rounded-[5px] py-3 hover:bg-[#29bb8a] duration-300"
            type="submit"
          >
            log in
          </button>
          {error && <div className="text-red-500">{error}</div>}
        </form>
        <Orsign />
      </div>
    </div>
  );
};

function Orsign() {
  return (
    <div>
      <span className="flex my-8 text-[gray]">or sign in with</span>
      <div className="flex">
        <Link href="https://google.com">
          <FcGoogle fontSize={30} />
        </Link>
        <Link className="mx-5" href="https://Twitter.com">
          <FaXTwitter fontSize={30} />
        </Link>
        <Link href="https://facebook.com">
          <FaFacebookF color="#3b5998" fontSize={30} />
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
