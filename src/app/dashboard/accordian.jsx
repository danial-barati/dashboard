import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FiActivity } from "react-icons/fi";
import { TiWorld } from "react-icons/ti";
import { FaCircleNotch } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { TbCube } from "react-icons/tb";
import { FaHourglassStart } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import { FaTableCellsLarge } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0 ${theme.palette.divider}`,
  backgroundColor: "#1f1f2b", // Change background color to #1f1f2b
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#9a9cab" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    color: "#9a9cab",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  color: "#9a9cab",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const pathname = usePathname();

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="group"
        >
          <Typography
            className={`flex items-center group-hover:translate-x-[5px] duration-200 transition-all ${
              expanded === "panel1" ? "text-[#83d8ae]" : ""
            }`}
          >
            <FiActivity />
            <span className="ms-2 capitalize text-[14px]">dashboard</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-[14px]">
            <Link
              className={`flex items-center mb-2 hover:translate-x-[5px] duration-200 transition-all ${
                pathname === "/dashboard" ? "text-white" : "text-[#9a9cab]"
              }`}
              href="/dashboard"
            >
              <FaCircleNotch className="mx-2 " />
              <span>eCommerce</span>
            </Link>
            <Link
              className={`flex items-center hover:translate-x-[5px] duration-200 transition-all ${
                pathname === "/dashboard/crypto"
                  ? "text-white"
                  : "text-[#9a9cab]"
              }`}
              href="/dashboard/crypto"
            >
              <FaCircleNotch className="mx-2 capitalize" />
              <span className="capitalize">crypto</span>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="group"
        >
          <Typography
            className={`flex items-center group-hover:translate-x-[5px] duration-200 transition-all ${
              expanded === "panel2" ? "text-[#83d8ae]" : ""
            }`}
          >
            <TiWorld />
            <span className="ms-2 capitalize text-[14px]">apps</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-[14px]">
            <Link
              className="flex items-center mb-2 hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2 capitalize" />
              <span className="capitalize">email</span>
            </Link>
            <Link
              className="flex items-center mb-2 hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2 capitalize" />
              <span className="capitalize">contact</span>
            </Link>
            <Link
              className="flex items-center hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2 capitalize" />
              <span className="capitalize">calendar</span>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="group"
        >
          <Typography
            className={`flex items-center group-hover:translate-x-[5px] duration-200 transition-all ${
              expanded === "panel3" ? "text-[#83d8ae]" : ""
            }`}
          >
            <IoCode />
            <span className="ms-2 capitalize text-[14px]">ui kits</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="capitalize text-[14px]">
            <Link
              className="flex items-center mb-2 hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2 " />
              alerts
            </Link>
            <Link
              className="flex items-center mb-2 hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2" />
              Typography
            </Link>
            <Link
              className="flex items-center mb-2 hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2 " />
              icons
            </Link>
            <Link
              className="flex items-center hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2 " />
              badge
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="group"
        >
          <Typography
            className={`flex items-center group-hover:translate-x-[5px] duration-200 transition-all ${
              expanded === "panel4" ? "text-[#83d8ae]" : ""
            }`}
          >
            <TbCube />
            <span className="ms-2 text-[14px] capitalize">plugins</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-[14px] capitalize">
            <Link
              className="flex items-center mb-2 hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2 " />
              black ui
            </Link>
            <Link
              className="flex items-center hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2" />
              session timeout
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="group"
        >
          <Typography
            className={`flex items-center group-hover:translate-x-[5px] duration-200 transition-all ${
              expanded === "panel5" ? "text-[#83d8ae]" : ""
            }`}
          >
            <FaHourglassStart />
            <span className="ms-2 text-[14px] capitalize">pages</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-[14px] capitalize">
            <Link
              className="flex items-center mb-2 hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2 " />
              invoice
            </Link>
            <Link
              className="flex items-center hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2" />
              price
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="group"
        >
          <Typography
            className={`flex items-center group-hover:translate-x-[5px] duration-200 transition-all ${
              expanded === "panel6" ? "text-[#83d8ae]" : ""
            }`}
          >
            <IoWaterOutline />
            <span className="ms-2 capitalize text-[14px]">form</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-[14px] capitalize">
            <Link
              className="flex items-center mb-2 hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2 " />
              form elements
            </Link>
            <Link
              className="flex items-center hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2" />
              form layout
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="group"
        >
          <Typography
            className={`flex items-center group-hover:translate-x-[5px] duration-200 transition-all ${
              expanded === "panel7" ? "text-[#83d8ae]" : ""
            }`}
          >
            <FaTableCellsLarge />
            <span className="ms-2 capitalize text-[14px]">tables</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-[14px] capitalize">
            <Link
              className="flex items-center mb-2 hover:translate-x-[5px] duration-200 transition-all hover:text-white"
              href=""
            >
              <FaCircleNotch className="mx-2 " />
              basic table
            </Link>
            <Link
              className="flex items-center hover:translate-x-[5px] duration-200 transition-all"
              href=""
            >
              <FaCircleNotch className="mx-2" />
              data table
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
