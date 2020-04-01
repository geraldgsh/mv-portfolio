const about = () => {
  const canvas = document.createElement('div');
  canvas.classList.add('canvas', 'rows', 'columns', 'is-gapless');
  canvas.innerHTML = `<div class="container is-fluid">
                        <div class="column is-half">
                          <div class="row">
                            <div class="intro"> 
                              <h3 class='title is-4 has-text-black info'>
                                Hello. My name is <span class="highlight">Gerald Goh.</span>
                                I enjoy blending aesthetics with sophistication. Besides
                                coding, I am keen on science and engineering that I've pursued
                                them academically. On my travel, I'd be trigger ready on my 
                                camera or looking for a photogenic location to launch my drone.                               
                              </h3> 
                            </div>
                          </div>
                        </div>
                      </div>`;

  return canvas;
};
export default about;
