import test, { expect, Page } from "@playwright/test";
import { LoginPage } from "../page/login.page";
import { locatorlogin } from "../model/login.model";

const url: string = "https://k-pvdregistra-sit.kasikornasset.net/ka-connect/login";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto(url);
  await expect(page).toHaveURL(url);
});

test("open login page", async ({ page }) => {
  await expect(page).toHaveTitle("KA Connect");
});