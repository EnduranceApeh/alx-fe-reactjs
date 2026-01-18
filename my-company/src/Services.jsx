
function Services() {
  const liStyles = {
    backgroundColor: "#1f2937",
    padding: "100px",
    color: "#fff",
    textAlign: "center",
    height: "50px",
    lineHeight: "50px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  };

  return (
    <div style={{ padding: '20px', color: "#1f2937", marginTop: "60px" }}>
      <h1 style={{textAlign: "center"}}>Our Services</h1>
      <ul style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        fontSize: "20px"

      }}>
        <li style={liStyles}>Technology Consulting</li>
        <li style={liStyles}>Market Analysis</li>
        <li style={liStyles}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;