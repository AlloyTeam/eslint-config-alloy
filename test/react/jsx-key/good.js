<ul>
  {[1, 2, 3].map((value) => (
    <li key={value}>{value}</li>
  ))}
</ul>;
<div>
  {[1, 2, 3].map((value) => (
    <React.Fragment key={value}>{value}</React.Fragment>
  ))}
</div>;
