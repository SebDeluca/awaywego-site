import { expect, test } from "@playwright/test";

test("homepage and legal pages render the required public content", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Away We Go" })).toBeVisible();
  await expect(
    page.getByText("YOUR TRIP · YOUR BOOK · SHIPPED"),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Privacy" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Terms" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Support" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Email address" })).toBeVisible();
  await page
    .getByRole("textbox", { name: "Email address" })
    .fill("traveler@example.com");
  await page.getByRole("button", { name: "Join the waitlist" }).click();
  await expect(
    page.getByText("Thanks. You are on the list for first access."),
  ).toBeVisible();

  await page.goto("/privacy");
  await expect(page.getByRole("heading", { name: "Privacy Policy" })).toBeVisible();

  await page.goto("/terms");
  await expect(
    page.getByRole("heading", { name: "Terms of Service" }),
  ).toBeVisible();

  await page.goto("/support");
  await expect(page.getByRole("heading", { name: "Support" })).toBeVisible();
  await expect(page.getByText("support@awaywegoapp.com")).toBeVisible();
});
