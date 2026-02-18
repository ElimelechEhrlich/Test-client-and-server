<table>
  <thead>
    <tr>
      {/* אם הנתונים דינמיים, אפשר להוציא כותרות מהאובייקט הראשון */}
      {data.length > 0 && Object.keys(data[0]).map(key => (
        <th key={key}>{key}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {data.map((row, index) => (
      <tr key={index}>
        {Object.values(row).map((val, i) => (
          <td key={i}>{val}</td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
