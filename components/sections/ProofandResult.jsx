"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import TitanStats from "../homepage/TitanStats";

const ProofResults = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-5xl font-bold text-white mb-4">
          Proof & <span className="text-[#06DF73]">Results</span>
        </h3>
        <motion.div
          className="w-64 h-1 bg-gradient-to-r from-[#22C55E] to-[#84CC16] mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        {/* <div className="w-64 h-1 bg-gradient-to-r from-[#22C55E] to-[#84CC16] mx-auto mb-12"></div> */}
      </motion.div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-md xl:max-w-7xl w-full">
        {/* Card 1 - Payroll Savings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="bg-[#001D06]/30 border-[#06DF73] border-[1px] h-[34rem] hover:border-green-500 relative transition-all duration-300">
            <CardContent className="p-8 h-full flex flex-col relative">
              <div className="text-white text-xl font-medium mb-4">
                $1.5M+ Payroll Savings
              </div>
              <div className="text-[#D7D7D7] text-sm mb-1 flex-grow">
                A major southern talent cut over $1.5M in annual costs by
                reducing payroll overhead, rightsizing competitive salaries, and
                streamlining approvals.
              </div>
            </CardContent>
            <div className="w-full h-[20rem] sm:h-[24rem] bg-[#0B1D0F] absolute bottom-0 border-[1px] border-[#06DF73] rounded-tr-[11.75rem] rounded-tl-[11.75rem] rounded-br-xl rounded-bl-xl z-0">
              <div className=" h-full">
                <div className="flex items-center justify-between gap-2 flex-col z-20 relative -mt-1">
                  <span className="bg-[#06DF73] inline-block rounded-full w-2 h-2"></span>
                  <Button
                    variant={"outline"}
                    className="flex items-center mx-auto bg-[#0C311A]/50 hover:bg-[#071A0E] rounded-[40px] border-[1px] border-[#004F21] py-3 px-8 justify-center mb-6"
                  >
                    <span className="text-[#06DF73] text-xs ">
                      $15M+ Payroll
                    </span>
                  </Button>
                </div>
                <h1 className="text-white text-[64px] sm:text-[96px] z-20  my-auto absolute bottom-4 left-14">
                  $1.5
                  <span className="text-base">Million +</span>
                </h1>
              </div>
            </div>
            {/* <Image
              src="/card-1.png"
              width={400}
              height={300}
              alt="Payroll Savings Illustration"
              className="absolute bottom-0  w-full"
            /> */}
          </Card>
        </motion.div>

        {/* Card 2 - Revenue Growth */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Card className="bg-[#001D06]/30 border-[#06DF73] border-[1px] h-[34rem] hover:border-green-500 relative transition-all duration-300">
            <CardContent className="p-8 h-full flex flex-col relative">
              <div className="text-white text-xl font-medium mb-4">
                3x Revenue Growth
              </div>
              <div className="text-[#D7D7D7] text-sm mb-1 flex-grow">
                A security company scaled faster by offloading back-office tasks
                to Outscale, freeing up leaders to focus on high-margin
                contracts.
              </div>

              <div className=" h-full">
                <h1 className="text-white text-[64px] sm:text-[96px] z-20  my-auto absolute bottom-4 left-20">
                  3<span className="text-base">X more then others</span>
                </h1>
              </div>
            </CardContent>
            {/* Bottom layer (darker green) */}
            <div className="w-full h-[24rem]  bg-[#152E1C] absolute bottom-0 [clip-path:polygon(0%_100%,_0%_47%,_100%_5%,_100%_100%)] rounded-br-xl rounded-bl-xl z-0"></div>

            {/* Top layer (brighter green) */}
            <div className="w-full  h-[18rem] bg-[#0B1D0F] absolute bottom-0 [clip-path:polygon(0%_100%,_0%_30%,_100%_0%,_100%_100%)] rounded-br-xl rounded-bl-xl z-10"></div>
          </Card>
        </motion.div>
        {/* Card 3 - Talent Retention */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Card className="bg-[#001D06]/30 border-[#06DF73] border-[1px] h-[34rem] hover:border-green-500 relative transition-all duration-300 overflow-hidden">
            <CardContent className="p-8 h-full flex flex-col relative">
              <div className="text-white text-xl font-medium mb-4">
                85% Talent Retention
              </div>
              <div className="text-[#D7D7D7] text-sm line mb-1 flex-grow">
                Outscale’s dedicated teams and culture of ownership help clients
                keep top talent engaged and turnover low, even during rapid
                growth.
              </div>

              <div className=" h-full text-center">
                <h1 className="text-white text-[96px] z-20  my-auto absolute bottom-4 left-32 sm:block hidden">
                  85<span className="text-base absolute top-8"> % </span>{" "}
                  <span className="text-base">More Talent</span>
                </h1>
                <h1 className="text-white text-[64px] sm:text-[96px] z-20  my-auto absolute bottom-4 left-16 sm:left-32 sm:hidden flex flex-col items-center">
                  85%
                  <span className="text-base">More Talent</span>
                </h1>
              </div>
            </CardContent>
            {/* Bottom layer (darker green) */}
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="w-[45%] sm:w-[13.5rem] h-[14rem] bg-[#152E1C]/50 p-2  rounded-[24px] absolute bottom-0 -left-10 z-0">
                <Button
                  variant={"outline"}
                  className="flex items-center    ml-auto bg-[#0C311A]/50 hover:bg-[#071A0E] rounded-[40px] border-[1px] border-[#004F21]/40 py-2 px-6 justify-center mb-6"
                >
                  <span className="text-[#06DF73] text-[10px] ">Other</span>
                </Button>
              </div>

              {/* Top layer (brighter green) */}
              <div className="w-[45%] sm:w-[13.5rem] h-[24rem] sm:h-[27rem] bg-[#152E1C] p-2 rounded-[24px] border-2 border-[#06DF73] absolute -bottom-14 -right-4  z-10">
                <Button
                  variant={"outline"}
                  className="flex items-center mr-auto bg-[#0C311A]/50 hover:bg-[#071A0E] rounded-[40px]  border-[1px] border-[#004F21] py-2 px-6 justify-center mb-6"
                >
                  <span className="text-[#06DF73] text-[10px] ">
                    Outscale Partners
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProofResults;
