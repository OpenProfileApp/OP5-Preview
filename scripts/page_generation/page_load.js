const fileListEndpoint = 'http://localhost:3000/fileList';
const element = document.getElementById('your_element_id');
var current_page = -1;
var current_z = 100;
var field_z = 10000;

// Fetch the file list and folder path
fetch(fileListEndpoint)
  .then(response => response.json())
  .then(({ folderPath, files }) => {
    files.forEach(fileName => {
      if (fileName.endsWith('.pge')) {
        const filePath = `${folderPath}/${fileName}`;
        fetch(filePath)
          .then(response => response.json())
          .then(data => {
            // Process the data as needed
            createPage(data);
            console.log(data);
          })
          .catch(error => console.error(`Error fetching JSON from ${filePath}:`, error));
      }
    });
  })
  .catch(error => console.error('Error fetching file list:', error));


  function createPage(data) {
    const page_loader = document.getElementById('center');
    current_page++;
    current_z--;
    const p_number = data.page_number 
    const current_index = (99 - p_number);

    // Original code for creating a page
    page_loader.innerHTML += `<div class="page_outer" id="page_${data.page_number}" style="z-index: ${current_index};">
    <div class="row" style="top: 4px; left: 367px;">
        <!--————————————————————————————————————————————————————————-->
        <!--—————————————————————[ BRAND-ICON ]—————————————————————-->
        <!--————————————————————————————————————————————————————————-->
        <div class="group" id="brand_icon_group" style="top: 0px; left: 0px; z-index: 21;" title="Brand Banner">
            <div class="tag" style="left: 18%; transform: translateX(-50%)translateY(-16px)scale(0.6);">${data.brand_tag}</div>
            <div><input class="brand_icon_media_input" id="brand_icon_media_input" type="file" accept="image/*,video/*" style="display: none;">
                <label for="brand_icon_media_input">
                    <div class="image_input_2" id="brand_icon_container" style="width: 81px; height: 22.5px; border-radius: 2.5px;">
                        <img class="brand_icon_selected_image" id="brand_icon_selected_image" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; opacity: 0.35; cursor: pointer; z-index: 30;" src="media/icons/feather_icons/plus-square.svg">
                        <img id="brand_icon_selected_image" style="border-radius: 2.5px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; display: none;  z-index: 30;" src="" alt="Selected Media">
                        <video class="brand_icon_selected_video" id="brand_icon_selected_video" controls style="border-radius: 2.5px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; display: none; z-index: 30;"></video>
                    </div>
                </label>
            </div>
            <script src="scripts/media/import/brand_icon_import_media.js"></script>
        </div>
    </div>

    <div class="page_inner" id="page_${data.page_number}_inner">
        <div class="row" style="top: -8px; left: 17px;">
            <!--————————————————————————————————————————————————————————-->
            <!--———————————————————[ PAGE-AUTHOR-1 ]————————————————————-->
            <!--————————————————————————————————————————————————————————-->
            <div class="group" id="page_author_${data.page_number}_group" style="top: 0px; left: -1px; z-index: 24;">
                <div class="tag" style="left: 95%; transform: translateX(-50%)translateY(-40px)scale(0.7);">${data.page_author_tag}</div>
                <div class="label_tab" id="page_author_label_tab" style="top: 29px; border-radius: 0px 0px 5px 0px; z-index: 2;">Page Author</div>
                <div><input type="text" class="input_text_author" id="page_author_${data.page_number}" style="width: 175px;" autocomplete="off" autocorrect="off" placeholder="Who is the page's author?"></div>
                <div class="help_box" id="page_author_help_box" style="width: 173px;">What is your name or pseudonym? If you're working as part of a collaboration, include the fellow author's name or pseudonym next to yours.</div>
            </div>

            <!--————————————————————————————————————————————————————————-->
            <!--——————————————————[ NAME-INFORMATION ]——————————————————-->
            <!--————————————————————————————————————————————————————————-->
            <div class="group" id="name_information_group" style="top: 0px; left: 249px; z-index: 23;">
                <div><input type="text" class="page_indicator" id="name_information" autocomplete="off" autocorrect="off" value="${data.page_indicator}" tabindex="-1" readonly></div>
            </div>

            <!--————————————————————————————————————————————————————————-->
            <!--———————————————————[ WRITTEN-DATE-1 ]———————————————————-->
            <!--————————————————————————————————————————————————————————-->
            <div class="group" id="written_date_${data.page_number}_group" style="top: 0px; left: 498px; z-index: 22;">
                <div class="tag" style="left: 100%; transform: translateX(-50%)translateY(-40px)scale(0.7);">${data.written_date_tag}</div>
                <div class="label_tab" id="written_date_label_tab" option="page_date" style="top: 29px; border-radius: 0px 0px 0px 5px; left: 134px;">Written Date</div>
                <div><input type="text" class="input_text_written" id="written_date_${data.page_number}" style="width: 175px; text-align: right;" autocomplete="off" autocorrect="off" placeholder="When was this page written?"></div>
                <div class="help_box" id="written_date_help_box" style="width: 173px;">What date was this page written on? You can include multiple dates in any format seperated by commas. This will prevent the last modified timestamp from showing.</div>
            </div>
        </div>
    </div>
    <div class="row" style="top: 1083px; left: 76px;">
                <!--————————————————————————————————————————————————————————-->
                <!--————————————————————[ LEGAL-FOOTER ]————————————————————-->
                <!--————————————————————————————————————————————————————————-->
                <div class="group" id="legal_footer_group" style="top: 0px; left: 0px; z-index: 0;">
                    <div><input type="text" class="input_text_legal" id="legal_footer" autocomplete="off" autocorrect="off" placeholder="Who owns and what is the legal licensing of this character?"></div>
                </div>
            </div>

            <div class="page_number">${data.page_number}</div>
</div>`;

    // Blank data holders
    const inner_page_loader = document.getElementById(`page_${data.page_number}_inner`);
    const numRows = 21;
    const numSlots = 3;


    // Loop through rows
      for (let row = 1; row <= numRows; row++) {
  
          // Loop through slots in each row
          for (let slot = 1; slot <= numSlots; slot++) {
              const key = `row${row}.slot${slot}.type`;
              const idKey = `row${row}.slot${slot}.id`;
              const labelKey = `row${row}.slot${slot}.label`;
              const placeholderKey = `row${row}.slot${slot}.placeholder`;
              const helpKey = `row${row}.slot${slot}.help`;

              const type = parseInt(getNestedValue(data, key));
              const id = getNestedValue(data, idKey);
              const label = getNestedValue(data, labelKey);
              const placeholder = getNestedValue(data, placeholderKey);
              const help = getNestedValue(data, helpKey);
              // Convert newline characters to HTML line breaks
              const formattedHelp = help.replace(/\n/g, '<br>');
                
              // Calculate positionX based on slot index
              var positionY = row * 46 + 4 ; // Adjust as needed for the row spacing
              var positionX = (slot - 1) * 230; // Adjust as needed for the slot spacing
              field_z--;
  
              // Generate page data
              if (key.includes('type')) {
                  switch (type) {
                      case 1:
                          // Code block for type 1
                          inner_page_loader.innerHTML += `<div class="row" style="top: ${positionY}px; left: 36px;">
                            <!--————————————————————————————————————————————————————————-->
                            <!--—————————————————————[ ${id} ]—————————————————————-->
                            <!--————————————————————————————————————————————————————————-->
                            <div class="group" id="${id}_group" style="top: 0px; left: ${positionX}px; z-index: ${field_z};">
                                <div class="label_tab" id="${id}_label_tab">${label}</div>
                                <div class="comment_group" id="${id}_comment_group" style="left: 5px;">
                                    <div class="comment_tab">
                                        <div class="comment_dot"></div>
                                    </div>
                                </div>
                                <div class="verified_source_tab" id="${id}_verified_source_tab">
                                    <a class="verified_source_icon" id="${id}_verified_source_icon" href="https://www.example.com" target="_blank" tabindex="-1">
                                        <img class="verified_source_favicon" id="${id}_verified_source_favicon" src=""></img>
                                    </a>
                                </div>
                                <div><input type="text" class="input_text" id="${id}" style="width: 175px;" autocomplete="off" autocorrect="off" placeholder="${placeholder}"></div>
                                <div class="help_box" id="${id}_help_box" style="width: 173px;">${formattedHelp}</div>
                                <div class="history_group" id="${id}_history_group">
                                    <div class="history_tab" id="${id}_history_tab">
                                        <div class="last_modified_text" id="${id}_time"></div>
                                        <div class="history_dot" id="${id}_history_dot"></div>
                                    </div>
                                </div>
                                <script src="scripts/generations/generate_${id}.js"></script>
                            </div>`
                          break;
                      case 2:
                        inner_page_loader.innerHTML += `<div class="row" style="top: ${positionY}px; left: 36px;">
                        <!--————————————————————————————————————————————————————————-->
                        <!--—————————————————————[ ${id} ]—————————————————————-->
                        <!--————————————————————————————————————————————————————————-->
                        <div class="group" id="${id}_group" style="top: 0px; left: ${positionX}px; z-index: ${field_z};">
                            <div class="label_tab" id="${id}_label_tab">${label}</div>
                            <div class="comment_group" id="${id}_comment_group" style="left: 5px;">
                                <div class="comment_tab">
                                    <div class="comment_dot"></div>
                                </div>
                            </div>
                            <div class="verified_source_tab" id="${id}_verified_source_tab">
                                <a class="verified_source_icon" id="${id}_verified_source_icon" href="https://www.example.com" target="_blank" tabindex="-1">
                                    <img class="verified_source_favicon" id="${id}_verified_source_favicon" src=""></img>
                                </a>
                            </div>
                            <div><input type="text" class="input_text" id="${id}" style="width: 367.5px;" autocomplete="off" autocorrect="off" placeholder="${placeholder}"></div>
                            <div class="help_box" id="${id}_help_box" style="width: 365.5px;">${formattedHelp}</div>
                            <div class="history_group" id="${id}_history_group">
                                <div class="history_tab" id="${id}_history_tab" style="left: 242px;">
                                    <div class="last_modified_text" id="${id}_time"></div>
                                    <div class="history_dot" id="${id}_history_dot"></div>
                                </div>
                            </div>
                            <script src="scripts/generations/generate_${id}.js"></script>
                        </div>`
                        break;
                      case 3:
                        inner_page_loader.innerHTML += `<div class="row" style="top: ${positionY}px; left: 36px;">
                        <!--————————————————————————————————————————————————————————-->
                        <!--—————————————————————[ ${id} ]—————————————————————-->
                        <!--————————————————————————————————————————————————————————-->
                        <div class="group" id="${id}_group" style="top: 0px; left: ${positionX}px; z-index: ${field_z};">
                            <div class="label_tab" id="${id}_label_tab">${label}</div>
                            <div class="comment_group" id="${id}_comment_group" style="left: 5px;">
                                <div class="comment_tab">
                                    <div class="comment_dot"></div>
                                </div>
                            </div>
                            <div class="verified_source_tab" id="${id}_verified_source_tab">
                                <a class="verified_source_icon" id="${id}_verified_source_icon" href="https://www.example.com" target="_blank" tabindex="-1">
                                    <img class="verified_source_favicon" id="${id}_verified_source_favicon" src=""></img>
                                </a>
                            </div>
                            <div><input type="text" class="input_text" id="${id}" style="width: 559px;" autocomplete="off" autocorrect="off" placeholder="${placeholder}"></div>
                            <div class="help_box" id="${id}_help_box" style="width: 557px;">${formattedHelp}</div>
                            <div class="history_group" id="${id}_history_group">
                                <div class="history_tab" id="${id}_history_tab" style="left: 433.5px;">
                                    <div class="last_modified_text" id="${id}_time"></div>
                                    <div class="history_dot" id="${id}_history_dot"></div>
                                </div>
                            </div>
                            <script src="scripts/generations/generate_${id}.js"></script>
                        </div>`
                      break;
                      case 4:
                        inner_page_loader.innerHTML += `<div class="row" style="top: ${positionY}px; left: 36px;">
                        <!--————————————————————————————————————————————————————————-->
                        <!--—————————————————————[ ${id} ]—————————————————————-->
                        <!--————————————————————————————————————————————————————————-->
                        <div class="group" id="${id}_group" style="top: 0px; left: ${positionX}px; z-index: ${field_z};">
                            <div class="label_tab" id="${id}_label_tab">${label}</div>
                            <div class="comment_group" id="${id}_comment_group" style="left: 5px;">
                                <div class="comment_tab">
                                    <div class="comment_dot"></div>
                                </div>
                            </div>
                            <div class="verified_source_tab" id="${id}_verified_source_tab">
                                <a class="verified_source_icon" id="${id}_verified_source_icon" href="https://www.example.com" target="_blank" tabindex="-1">
                                    <img class="verified_source_favicon" id="${id}_verified_source_favicon" src=""></img>
                                </a>
                            </div>
                            <textarea id="${id}" style="width: 559px; height: 121px;" autocomplete="off" autocorrect="off" placeholder="${placeholder}"></textarea>
                            <div class="help_box" id="${id}_help_box" style="width: 557px; top: 117px;">${formattedHelp}</div>
                            <div class="history_group" id="${id}_history_group">
                                <div class="history_tab" id="${id}_history_tab" style="left: 433.5px; top: 109px;">
                                    <div class="last_modified_text" id="${id}_time"></div>
                                    <div class="history_dot" id="${id}_history_dot"></div>
                                </div>
                            </div>
                            <script src="scripts/generations/generate_${id}.js"></script>
                        </div>`
                      break;
                      case 5:
                        inner_page_loader.innerHTML += `<div class="row" style="top: ${positionY}px; left: 36px;">
                        <!--————————————————————————————————————————————————————————-->
                        <!--—————————————————————[ ${id} ]—————————————————————-->
                        <!--————————————————————————————————————————————————————————-->
                        <div class="group" id="${id}_group" style="top: 0px; left: ${positionX}px; z-index: ${field_z};">
                            <div class="label_tab" id="${id}_label_tab">${label}</div>
                            <div class="comment_group" id="${id}_comment_group" style="left: 5px;">
                                <div class="comment_tab">
                                    <div class="comment_dot"></div>
                                </div>
                            </div>
                            <div class="verified_source_tab" id="${id}_verified_source_tab">
                                <a class="verified_source_icon" id="${id}_verified_source_icon" href="https://www.example.com" target="_blank" tabindex="-1">
                                    <img class="verified_source_favicon" id="${id}_verified_source_favicon" src=""></img>
                                </a>
                            </div>
                            <textarea id="${id}" style="width: 559px; height: 242px;" autocomplete="off" autocorrect="off" placeholder="${placeholder}"></textarea>
                            <div class="help_box" id="${id}_help_box" style="width: 557px; top: 238px;">${formattedHelp}</div>
                            <div class="history_group" id="${id}_history_group">
                                <div class="history_tab" id="${id}_history_tab" style="left: 433.5px; top: 230px;">
                                    <div class="last_modified_text" id="${id}_time"></div>
                                    <div class="history_dot" id="${id}_history_dot"></div>
                                </div>
                            </div>
                            <script src="scripts/generations/generate_${id}.js"></script>
                        </div>`
                      break;
                      }
              } else {
                  // Generate code for other data values (excluding _type)
                  // Add your custom code based on each data value here
              }
          }
      }
  }

  // Helper function to get nested values from a string key
function getNestedValue(obj, key) {
  return key.split('.').reduce((acc, cur) => acc[cur], obj);
}