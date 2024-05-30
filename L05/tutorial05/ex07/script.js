const element = document.getElementById("two");
element.addEventListener("click", function()
{
  let elements = document.getElementsByClassName('hot');
  if (elements.length >= 1)
  {
    let firstItem = elements.item(elements);
    firstItem.className = "cool";
  }
}
)