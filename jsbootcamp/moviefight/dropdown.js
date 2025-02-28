const createDropdown = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  //set initial html in root element
  root.innerHTML = `
    <label><b>Search</b></label>
    <input class="input"/>
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`;

  //get reference to root elements
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const dropdownMenu = root.querySelector(".dropdown-menu");
  const resultsWrapper = root.querySelector(".results");

  //fetch data on input
  const onInput = async (event) => {
    //fetch data
    const items = await fetchData(event.target.value);

    //clear results
    resultsWrapper.innerHTML = " ";

    if (items.length == 0) {
      dropdown.classList.remove("is-active");
      return;
    } else {
      dropdown.classList.add("is-active");
      dropdownMenu.style.position = "relative";
    }

    for (let item of items) {
      const option = document.createElement("a");

      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(item);

      //Add event listener for  each option
      option.addEventListener("click", () => {
        input.value = inputValue(item);
        dropdown.classList.remove("is-active");
        onOptionSelect(item);
      });

      //add result
      resultsWrapper.appendChild(option);
    }
  };

  //input event listener pass event function onInput to debounce utility (utils.js)
  input.addEventListener("input", debounce(onInput, 500));

  //close dropdown
  document.addEventListener("click", (event) => {
    //click event is not in widget div
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
