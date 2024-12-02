const API_BASE_URL = "http://localhost:7037/api/users"; 

// Function to create a new user
export const createUser = async (userData) => {
  try {
    // Make a POST request to the API
    const response = await fetch(`${API_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Tell the API you're sending JSON data
      },
      body: JSON.stringify(userData), // Convert the user data object to JSON
    });


    // Check if the response is OK (status code 2xx)
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`); // Throw an error if the request fails
    }


    // Parse and return the response JSON data
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error.message);
    throw error; 
  }
};
