package definitions;

import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class PalindromeDefinition {
		String testPalindrome;
		boolean isPalindrome;
		
		@Given("Input string {string}")
		public void Input_string(String string) {
			testPalindrome = string;
		}

		@When("Check palindrome")
		public void Check_palindrome() {
			String hasilBalik = new StringBuilder(testPalindrome).reverse().toString();
			isPalindrome = testPalindrome.equalsIgnoreCase(hasilBalik);
		}

		@Then("Validasi palindrome{string}")
		public void Validasi_palindrome(String string) {
			boolean expectResult = Boolean.parseBoolean(string);
			
			if (expectResult) {
				assertTrue(isPalindrome);
			} else {
				assertFalse(isPalindrome);
			}
		}

}

