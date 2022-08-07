import { Button, Form, Input } from "antd";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  FormEvent,
} from "react";
import ChildrenMemo from "./components/ChildrenMemo";
import ChilrenContext from "./components/ChilrenContext";
import { MyContext } from "./components/MyContext";

const List = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onUseRef = () => {
    console.log("inputRef.current", inputRef.current?.value);
    console.log("formRef", formRef.current);
  };

  useEffect(() => {
    console.log("inputRef", inputRef);
    console.log("formRef", formRef);
  }, [inputRef]);

  let callBack = useCallback(() => {
    console.log("count", count);

    return count;
  }, [num]);

  const countChange = () => {
    setCount(count + 1);
    console.log(count + 1);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("e: ", e);

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      console.log("formData: ", formData);

      console.log(formData.get("num1"));
    }
  };

  const onSubmitForm = (e: any) => {
    console.log("e: ", e);
  };

  return (
    <div>
      <MyContext.Provider value={count}>
        <ChilrenContext></ChilrenContext>
      </MyContext.Provider>

      {/* <h1>count={res.count}-{res.num}</h1> */}
      <h1>
        父组件{count}-{num}
      </h1>

      <ChildrenMemo a={count} b={num}></ChildrenMemo>
      <h1>callBack:{callBack()}</h1>
      <form ref={formRef} onSubmit={onSubmit}>
        <input ref={inputRef} name="num1" type="text"></input>
        <input ref={inputRef} name="num2" type="text"></input>
        <button type="submit">submit</button>
      </form>

      <Form onFinish={onSubmitForm}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          save
        </Button>
      </Form>

      <Button onClick={onUseRef}>ref按钮</Button>

      <Button onClick={countChange}>countChange</Button>
      <Button
        style={{ marginLeft: 20 }}
        type="primary"
        onClick={() => {
          setNum(num + 1);
          console.log(num + 1);
        }}
      >
        numChange
      </Button>
    </div>
  );
};

export default List;
