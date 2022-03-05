import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Backdrop from "./Backdrop";

describe("Backdrop component", () => {
  const backdropRoot = global.document.createElement("div");
  backdropRoot.setAttribute("id", "backdrop-hook");
  // eslint-disable-next-line testing-library/no-node-access
  const body = global.document.querySelector("body");
  body?.appendChild(backdropRoot);

  test("renders div", () => {
    render(<Backdrop onClick={() => {}} />);
    const backdrop = screen.getByTestId('backdrop')
    expect(backdrop).toBeInTheDocument();
  });

  test('onClick is fired when backdrop is clicked', () => {
    const onClickMock = jest.fn()
    render(<Backdrop onClick={onClickMock} />);
    const backdrop = screen.getByTestId('backdrop')
    userEvent.click(backdrop);
    expect(onClickMock).toHaveBeenCalled();
  })
});