import React, { useState, useEffect } from "react";
import hero from "../assets/hero.jpg";
import { motion } from "framer-motion";
import store from "../redux/store";
//引入actionCreator，专门用于创建action对象
import {
  createIncrementAction,
  createDecrementAction,
} from "../redux/actions/count";
const Home = () => {
  const [tt, setTt] = useState({});
  const [isFollow, setIsFollow] = useState(false);
  // 组件挂载时调用
  useEffect(() => {
    //执行函数，对应componentDidMount()
    store.subscribe(() => {
      setTt({});
    });
  });
  //加法
  const increment = () => {
    console.log(666);
    setIsFollow(true);
    store.dispatch(createIncrementAction(1));
  };
  //减法
  const decrement = () => {
    console.log(666);
    setIsFollow(false);
    store.dispatch(createDecrementAction(1));
  };
  return (
    <div className="section flex justify-center items-center" id="home">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-heroSadow border-[20px] border-solid border-ghostWhite">
          <img
            src={hero}
            alt="hero-img"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-grey sm:text-[1.25rem] mb-4">Company</div>
          <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-4">
            ALEX设计工作室
          </h2>
          <p className="opacity-80 text-[0.9rem]">
            设计源于生活，生活因设计而改变！成就空间和谐，让设计物有所值，让细节缔造完美！
          </p>
          <div className="flex mt-4 gap-4">
            {isFollow ? (
              <a
                className="py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md cursor-pointer"
                onClick={() => decrement()}
              >
                取消关注
              </a>
            ) : (
              <a
                className="py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md cursor-pointer"
                onClick={() => increment()}
              >
                关注 +1
              </a>
            )}
            <a
              href="#contact"
              className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              联系我们
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
