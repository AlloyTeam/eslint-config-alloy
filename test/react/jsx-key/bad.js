<ul>
  {[1, 2, 3].map((value) => (
    <li>{value}</li>
  ))}
</ul>;
<div>
  {[1, 2, 3].map((value) => (
    <>{value}</>
  ))}
</div>;
