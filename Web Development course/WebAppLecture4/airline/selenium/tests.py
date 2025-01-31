import os
import pathlib
import unittest

from selenium import webdriver
from selenium.webdriver.common.by import By

def file_uri(filename):
    return pathlib.Path(os.path.abspath(filename)).as_uri()

driver = webdriver.Edge()

class WebpageTests(unittest.TestCase):

    def test_title(self):
        """Make sure title is correct"""
        driver.get(file_uri("counter.html"))
        self.assertEqual(driver.title, "Counter")

    def test_increment(self):
        """Make sure header updated to 1 after 1 click of increase button"""
        driver.get(file_uri("counter.html"))

        increment = driver.find_element(By.ID, "increment")
        increment.click()

        self.assertEqual(driver.find_element(By.TAG_NAME, "h1").text, "1")

    def test_decrement(self):
        driver.get(file_uri("counter.html"))
        
        decrement = driver.find_element(By.ID, "decrement")
        decrement.click()

        self.assertEqual(driver.find_element(By.TAG_NAME, "h1").text, "-1")
        
    def test_increment_30(self):
        """Make sure header updated to 1 after 1 click of increase button"""
        driver.get(file_uri("counter.html"))

        increment = driver.find_element(By.ID, "increment")
        for i in range(30):
            increment.click()

        self.assertEqual(driver.find_element(By.TAG_NAME, "h1").text, "30")

    def test_decrement(self):
        driver.get(file_uri("counter.html"))
        
        decrement = driver.find_element(By.ID, "decrement")
        for i in range(30):
            decrement.click()

        self.assertEqual(driver.find_element(By.TAG_NAME, "h1").text, "-30")

if __name__ == "__main__":
    unittest.main()