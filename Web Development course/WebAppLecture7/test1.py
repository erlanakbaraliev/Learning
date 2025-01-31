from is_prime import is_prime
import unittest

class Tests(unittest.TestCase):
    def test_1(self):
        self.assertTrue(is_prime(2))
    def test_2(self):
        self.assertFalse(is_prime(12))
    def test_3(self):
        self.assertFalse(is_prime(15))
    def test_4(self):
        self.assertFalse(is_prime(14))
    def test_5(self):
        self.assertFalse(is_prime(100))
    def test_6(self):
        self.assertFalse(is_prime(150))
    def test_7(self):
        self.assertTrue(is_prime(5))
    def test_8(self):
        self.assertTrue(is_prime(11))
    def test_9(self):
        self.assertFalse(is_prime(112))
    def test_10(self):
        """"Check that 10 is not a prime"""
        self.assertFalse(is_prime(10))

if __name__ == "__main__":
    unittest.main()