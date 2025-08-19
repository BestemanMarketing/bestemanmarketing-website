// Fetch and parse the policies CSV file
async function fetchPolicies() {
  try {
    const response = await fetch(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20spreadsheet%20-%20Policies-th2B6GI1OodeyBvhaUnZaojq4B6hQQ.csv",
    )
    const csvText = await response.text()

    console.log("CSV Content:")
    console.log(csvText)

    // Parse CSV manually since it contains complex text with newlines
    const lines = csvText.split("\n")
    console.log("Number of lines:", lines.length)

    // Log first few lines to understand structure
    lines.slice(0, 10).forEach((line, index) => {
      console.log(`Line ${index}:`, line)
    })
  } catch (error) {
    console.error("Error fetching policies:", error)
  }
}

fetchPolicies()
