import { Button, Input } from "./Template";
import { render, screen } from "@testing-library/react";

describe("인풋 컴포넌트를 렌더링 하라", () => {
  test("라벨 없이 렌더링", () => {
    render(<Input placeholder="여기에 입력하세요" />);
    expect(
      screen.getByPlaceholderText("여기에 입력하세요")
    ).toBeInTheDocument();
  });

  test("라벨과 함께 렌더링", () => {
    render(<Input label="이름" placeholder="이름을 입력하세요" />);
    expect(screen.getByLabelText("이름")).toBeInTheDocument();
  });
});

describe("버튼 테스트", () => {
  test("버튼은 클릭할 수 없는 상태로 렌더링", () => {
    // render(<Button didsabled={false}>클릭 할 수 없는 버튼</Button>);
    // expect(screen.getByRole("button")).toBeDisabled();
  });

  test("버튼은 클릭할 수 있는 상태로 렌더링", () => {
    render(<Button>클릭 할 수 있는 버튼</Button>);
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
