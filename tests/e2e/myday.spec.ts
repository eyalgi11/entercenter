import { expect, test } from '@playwright/test'

test.describe('MyDay assignment flow', () => {
  test('adds a task, toggles it, and deletes it', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'MyDay' })).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Finish the assignment demo notes' }),
    ).toBeVisible()

    await page.getByRole('link', { name: 'Add a new task' }).first().click()
    await expect(page.getByRole('heading', { name: 'New Task' })).toBeVisible()

    await page.getByLabel('Task name').fill('Record the app walkthrough')
    await page
      .getByLabel('Description or category')
      .fill('Demo checklist')
    await page.getByRole('button', { name: 'Save task' }).click()

    const addedTaskHeading = page.getByRole('heading', {
      name: 'Record the app walkthrough',
    })
    await expect(addedTaskHeading).toBeVisible()

    const newTaskToggle = page.getByRole('button', {
      name: 'Mark Record the app walkthrough as completed',
    })
    await newTaskToggle.click()

    await expect(
      page.getByRole('button', {
        name: 'Mark Record the app walkthrough as not completed',
      }),
    ).toBeVisible()

    await page.reload()

    await expect(addedTaskHeading).toBeVisible()
    await expect(
      page.getByRole('button', {
        name: 'Mark Record the app walkthrough as not completed',
      }),
    ).toBeVisible()

    await page
      .getByRole('button', { name: 'Delete Record the app walkthrough' })
      .click()

    await expect(addedTaskHeading).not.toBeVisible()
  })
})
