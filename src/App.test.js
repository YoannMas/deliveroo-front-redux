import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("check if meals are displayed", async () => {
  render(<App />);

  const menuItemCards = await screen.findAllByTestId("menu-item-card");
  expect(menuItemCards.length).toBeGreaterThanOrEqual(1);
});

test("add meal to cart", async () => {
  render(<App />);

  // Waiting for loading
  const menuItemCards = await screen.findAllByTestId("menu-item-card");

  // Click on the first two meals
  userEvent.click(menuItemCards[0]);
  userEvent.click(menuItemCards[1]);

  const cartAmount = screen.getByTestId("cart-amount");
  const total = Number(
    cartAmount.textContent.replace(" €", "").replace(",", ".")
  );
  expect(total).toEqual(52.5);

  // Check if meals are well displayed in cart
  const cartLines = screen.getAllByTestId("cart-line");
  expect(cartLines.length).toEqual(2);

  const plusBtn = screen.getAllByTestId("plus-btn");
  const minusBtn = screen.getAllByTestId("minus-btn");
  const itemQuantities = screen.getAllByTestId("item-quantity");

  // Check -/+ buttons
  expect(itemQuantities[0].textContent).toEqual("1");

  userEvent.click(plusBtn[0]);
  userEvent.click(plusBtn[0]);
  expect(itemQuantities[0].textContent).toEqual("3");

  userEvent.click(minusBtn[0]);
  expect(itemQuantities[0].textContent).toEqual("2");

  // Check cart amount update
  const cartAmount2 = screen.getByTestId("cart-amount");
  expect(
    Number(cartAmount2.textContent.replace(" €", "").replace(",", "."))
  ).toEqual(77.5);
});
