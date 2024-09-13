import { render, screen } from "@testing-library/react";
import { act } from "react";
import { RouterProvider } from "react-router-dom";
import router from ".";

describe("라우팅 테스트", () => {
  test("/ 경로는 Home을 h1태그로 갖는다.", () => {
    render(<RouterProvider router={router} />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Home");
  });

  test("/login 경로로 이동할 수 있다.", () => {
    render(<RouterProvider router={router} />);
    const link = screen.getByRole("link", { name: /to login/i });
    act(() => {
      link.click();
    });
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Login");
  });

  test("/tips-for-interview 경로로 이동할 수 있다.", () => {
    render(<RouterProvider router={router} />);
    const link = screen.getByRole("link", { name: /to tips-for-interview/i });
    act(() => {
      link.click();
    });
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Tips for Interview");
  });
});
