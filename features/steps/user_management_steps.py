from behave import given, when, then
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@given('I am on the login page')
def step_impl(context):
    context.browser.get('http://localhost:9000/dashboard/')

@when('I enter my admin credentials')
def step_impl(context):
    wait = WebDriverWait(context.browser, 10)
    
    # Attendre que le champ email soit présent
    email_input = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, 'input[data-test-id="email"]')))
    email_input.send_keys('admin@example.com')

    # Attendre que le champ password soit présent
    password_input = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, 'input[data-test-id="password"]')))
    password_input.send_keys('admin')
    
    # Attendre que le bouton soit cliquable
    login_button = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="macaw-ui-root"]/div/div[1]/div/form/div[5]/button')))
    login_button.click()

@then('I should be redirected to the admin dashboard')
def step_impl(context):
    wait = WebDriverWait(context.browser, 10)
    wait.until(EC.title_contains('Dashboard'))
    assert 'Dashboard' in context.browser.title
