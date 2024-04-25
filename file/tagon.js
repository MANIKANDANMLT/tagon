class Blur extends HTMLElement{
    connectedCallback(){
        const val = this.getAttribute('value')
        this.style.filter = `blur(${val}px)`;}
    }
class Popup extends HTMLElement{
    connectedCallback(){
        const msg = this.getAttribute('msg')
        const goto = this.getAttribute('goto')
        this.style.cursor = "pointer";
        this.onclick = (ev) =>{
            alert(msg);
            window.location = goto;
        };}
}
class AnimateH extends HTMLElement{
    connectedCallback(){
        const duration = this.getAttribute('duration')
        const animetype = this.getAttribute('animetype')
        const move = this.getAttribute('move')
        const loop = this.getAttribute('loop')
        this.style.display = 'inline-block';
        let x = duration
        let animationDuration = Number(x); 
        let animationType = animetype;
        const keyframes = [
            { translate: `${move}px` },
        ];
        const options = {
            duration: animationDuration,
            easing: animationType,
            iterations: loop // Play animation infinitely
        };
        this.animate(keyframes, options);
    }
}
class AnimateV extends HTMLElement{
    connectedCallback(){
        const duration = this.getAttribute('duration')
        const animetype = this.getAttribute('animetype')
        const move = this.getAttribute('move')
        const loop = this.getAttribute('loop')
        this.style.display = 'inline-block';
        let x = duration
        let animationDuration = Number(x); 
        let animationType = animetype;
        const keyframes = [
            { transform: `translateY(${move}px)` },
        ];
        const options = {
            duration: animationDuration,
            easing: animationType,
            iterations:loop // Play animation infinitely
        };
        this.animate(keyframes, options);
    }
}
class Rotate extends HTMLElement{
    connectedCallback(){
        const duration = this.getAttribute('duration')
        const animetype = this.getAttribute('animetype')
        const deg = this.getAttribute('deg')
        const loop = this.getAttribute('loop')
        this.style.display = 'inline-block';
        let x = duration
        let animationDuration = Number(x); 
        let animationType = animetype;
        const keyframes = [
            { transform: 'rotate(0deg)' }, 
            { transform: `rotate(${deg}deg)` },    
        ];
        const options = {
            duration: animationDuration,
            easing: animationType,
            iterations: loop // Play animation infinitely
        };
        this.animate(keyframes, options);   
    }
}
class RotateToStart extends HTMLElement{
    connectedCallback(){
        const duration = this.getAttribute('duration')
        const animetype = this.getAttribute('animetype')
        const deg = this.getAttribute('deg')
        const loop = this.getAttribute('loop')
        this.style.display = 'inline-block';
        let x = duration
        let animationDuration = Number(x); 
        let animationType = animetype;
        const keyframes = [
            { transform: 'rotate(0deg)' }, 
            { transform: `rotate(${deg}deg)` },
            { transform: 'rotate(0deg)' }    
        ];
        const options = {
            duration: animationDuration,
            easing: animationType,
            iterations: loop // Play animation infinitely
        };
        this.animate(keyframes, options);
     
    }
    
}
class Whatsapp extends HTMLElement{
    connectedCallback(){
        const num = this.getAttribute('number');
        const msg = this.getAttribute('msg');
        const img = this.getAttribute('image');
        const imgheight = this.getAttribute('imgh');
        const imgwidth = this.getAttribute('imgw');
        const content = this.getAttribute('content');
        const styling = this.getAttribute('instyle');
       this.innerHTML=`<a style="${styling}" href="https://wa.me/${num}?text=${msg}">${content}<img src="${img}" height="${imgheight}" width="${imgwidth}"></a>`
    }
}
class Timeline extends HTMLElement{
    connectedCallback(){
        const info = this.getAttribute('info');
        const infocolor = this.getAttribute('info-color');
        const infomoveh = this.getAttribute('info-moveh');
        const infomovev = this.getAttribute('info-movev');
        const title = this.getAttribute('title');
        const titlecolor = this.getAttribute('title-color');
        const detail = this.getAttribute('detail');
        const detailcolor = this.getAttribute('detail-color');
        const icon = this.getAttribute('icon')
        const iconcolor = this.getAttribute('icon-color')
        const iconheight = this.getAttribute('icon-height')
        const iconwidth = this.getAttribute('icon-width')
        const iconradius = this.getAttribute('icon-radius')
        const iconborder = this.getAttribute('icon-border')
        const iconmove = this.getAttribute('icon-move')
        const side = this.getAttribute('side');
        if(side=="left"){
            if(icon==""){
                        this.innerHTML = `<div style="display:flex;">
                            <pre style="font-size:15px;color:${infocolor};margin-top:28px;">${info} - </pre>
                            <div>
                            <div style="border-left:2px solid black;padding:2px;">
                            <pre style="font-size:22px;margin-top:0;padding-top:5px;padding-left:5px;color:${titlecolor};">${title}</pre>
                            <pre style="margin-top:-10px;padding-left:5px;color:${detailcolor};">${detail}</pre>    
                            </div>
                        </div>`;
                        }
            else{
                        this.innerHTML = `<div style="display:flex;">
                            <pre style="font-size:15px;color:${infocolor};margin-top:28px;">${info} - </pre>
                            <div>
                            <img src="${icon}" style="background:${iconcolor};height:${iconheight}px;width:${iconwidth}px;margin-left:${iconmove}px;border:${iconborder};border-radius:${iconradius};">
                            <div style="border-left:2px solid black;padding:2px;">
                            <pre style="font-size:22px;margin-top:0;padding-top:5px;padding-left:5px;color:${titlecolor};">${title}</pre>
                            <pre style="margin-top:-10px;padding-left:5px;color:${detailcolor};">${detail}</pre>    
                            </div>
                        </div>`;}
            }
        else{
            if(icon==""){
                        this.innerHTML = `<div style="display:flex;"> 
                            <div>
                            <div style="border-right:2px solid black;padding:2px;">
                            <pre style="font-size:22px;margin-top:0;padding-top:5px;padding-right:5px;color:${titlecolor};text-align:right;">${title}</pre>
                            <pre <!-- style="margin-top:-10px;padding-right:5px;color:${detailcolor};text-align:right;"-->${detail}</pre>
                            </div>
                            </div>
                            <pre style="font-size:15px;color:${infocolor};margin-top:15px;"> - ${info} </pre>
                        </div>`;
                    }
            else{
                        this.innerHTML = `<div style="display:flex;"> 
                        
                        <div>
                        <img src="${icon}" style="background:${iconcolor};height:${iconheight}px;width:${iconwidth}px;translate:${iconmove}px;border:${iconborder};border-radius:${iconradius}; margin-top:2px;">
                        <div style="border-right:2px solid black;padding:2px;">
                        <pre style="font-size:22px;margin-top:0;padding-top:5px;padding-right:5px;color:${titlecolor};text-align:right;">${title}</pre>
                        <pre <!-- style="margin-top:-10px;padding-right:5px;color:${detailcolor};text-align:right;"-->${detail}</pre>
                        </div>
                        </div>
                        <pre style="font-size:15px;color:${infocolor};margin-top:${infomoveh}px;margin-left:${infomovev}px;"> - ${info} </pre>
                        </div>
                    </div>`;
                }
        }
    }
}
class ScaleV extends HTMLElement{
    connectedCallback(){
        const duration = this.getAttribute('duration');
        const animetype = this.getAttribute('animetype');
        const scale = this.getAttribute('scale');
        const loop = this.getAttribute('loop');
        this.style.display = 'inline-block';
        let animationDuration = Number(duration); 
        let animationType = animetype;
        let scalingFactor = parseFloat(scale);
        
        // Set default scaling factor to 1 if not provided or invalid
        if (isNaN(scalingFactor)) {
            scalingFactor = 1;
        }
        
        const keyframes = [
            { transform: `scaleY(${scalingFactor})` }
        ];
        
        const options = {
            duration: animationDuration,
            easing: animationType,
            iterations: loop // Play animation infinitely
        };
        
        this.animate(keyframes, options);
    }
}
class ScaleH extends HTMLElement{
    connectedCallback(){
        const duration = this.getAttribute('duration');
        const animetype = this.getAttribute('animetype');
        const scale = this.getAttribute('scale');
        const loop = this.getAttribute('loop');
        this.style.display = 'inline-block';
        let animationDuration = Number(duration); 
        let animationType = animetype;
        let scalingFactor = parseFloat(scale);
        
        // Set default scaling factor to 1 if not provided or invalid
        if (isNaN(scalingFactor)) {
            scalingFactor = 1;
        }
        
        const keyframes = [
            { transform: `scaleX(${scalingFactor})` }
        ];
        
        const options = {
            duration: animationDuration,
            easing: animationType,
            iterations: loop // Play animation infinitely
        };
        
        this.animate(keyframes, options);
    }
}
class ScaleBoth extends HTMLElement{
    connectedCallback(){
        const duration = this.getAttribute('duration');
        const animetype = this.getAttribute('animetype');
        const scale = this.getAttribute('scale');
        const loop = this.getAttribute('loop');
        this.style.display = 'inline-block';
        let animationDuration = Number(duration); 
        let animationType = animetype;
        let scalingFactor = parseFloat(scale);
        
        // Set default scaling factor to 1 if not provided or invalid
        if (isNaN(scalingFactor)) {
            scalingFactor = 1;
        }
        
        const keyframes = [
            { transform: `scale(${scalingFactor})`,}
        ];
        
        const options = {
            duration: animationDuration,
            easing: animationType,
            iterations: loop // Play animation infinitely
        };
        
        this.animate(keyframes, options);
    }
}
class ReadJson extends HTMLElement {
    async connectedCallback() {
        const src = this.getAttribute('src');
        if (!src) {
            console.error('src attribute is required for <read-json> element');
            return;
        }
        try {
            const response = await fetch(src);
            if (!response.ok) throw new Error('Network response was not ok');
            const jsonData = await response.json();
            this.render(jsonData);
        } catch (error) {
            console.error('Error fetching or parsing JSON:', error);
        }
    }

    render(jsonData) {
        const pre = document.createElement('pre');
        pre.textContent = JSON.stringify(jsonData, null, 2);
        this.appendChild(pre);
    }
}
class ReadXml extends HTMLElement {
    async connectedCallback() {
        const src = this.getAttribute('src');
        if (!src) {
            console.error('src attribute is required for <read-xml> element');
            return;
        }
        try {
            const response = await fetch(src);
            if (!response.ok) throw new Error('Network response was not ok');
            const xmlData = await response.text();
            this.render(xmlData);
        } catch (error) {
            console.error('Error fetching XML:', error);
        }
    }

    render(xmlData) {
        const pre = document.createElement('pre');
        pre.textContent = xmlData;
        this.appendChild(pre);
    }
}
class ReadCsv extends HTMLElement {
    async connectedCallback() {
        const src = this.getAttribute('src');
        if (!src) {
            console.error('src attribute is required for <read-csv> element');
            return;
        }
        try {
            const response = await fetch(src);
            if (!response.ok) throw new Error('Network response was not ok');
            const csvData = await response.text();
            this.render(csvData);
        } catch (error) {
            console.error('Error fetching CSV:', error);
        }
    }

    render(csvData) {
        const rows = csvData.trim().split('\n').map(row => row.split(','));
        const table = document.createElement('table');
        const headborder = this.getAttribute('thborder');
        const headpad = this.getAttribute('thpad');
        const headtextalign = this.getAttribute('thalign');
        const headbackground = this.getAttribute('thbgcolor');
        const databorder = this.getAttribute('tdborder');
        const datapad = this.getAttribute('tdpad');
        const dataalign = this.getAttribute('tdalign')
        const databackground = this.getAttribute('tdbgcolor');

        // Style table
        table.style.borderCollapse = 'collapse';
        table.style.width = '';

        // Create header row
        const headerRow = document.createElement('tr');
        rows[0].forEach(cell => {
            const th = document.createElement('th');
            th.textContent = cell;
            th.style.border = headborder;
            th.style.padding = headpad;
            th.style.textAlign = headtextalign;
            th.style.backgroundColor = headbackground;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Create data rows
        for (let i = 1; i < rows.length; i++) {
            const dataRow = document.createElement('tr');
            rows[i].forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                td.style.border = databorder;
                td.style.padding = datapad;
                td.style.textAlign = dataalign;
                td.style.backgroundColor = databackground;
                dataRow.appendChild(td);
            });
            table.appendChild(dataRow);
        }

        this.appendChild(table);
    }
}
class NetInfo extends HTMLElement {
    connectedCallback() {
        this.style.display = 'none';
        window.addEventListener('online', this.onlineHandler.bind(this));
        window.addEventListener('offline', this.offlineHandler.bind(this));
    }
    offlineHandler() {
        const offlinestyle=this.getAttribute('styleoff');
        this.innerHTML = `<p style=${offlinestyle}>Check your Internet Offline</p>`;
        this.style.display = 'block'; 
        this.padding = '3px'
        setTimeout(() => {
            this.style.display = 'none'; 
        }, 4000);
    }
    onlineHandler() {
        const onlinestyle=this.getAttribute('styleon');
        this.innerHTML = `<p style=${onlinestyle}>Back to online</p>`;
        this.style.display = 'block';
        this.padding = '3px' 
        setTimeout(() => {
            this.style.display = 'none'; 
        }, 4000);
    }
}
class Goto extends HTMLElement {
    connectedCallback() {
        const txt = this.getAttribute('text')
        this.style.display = 'none';
        this.style.position = 'fixed';
        this.style.bottom = '20px';
        this.style.right = '20px';
        this.style.padding ='10px'
        this.style.cursor = 'pointer';
        this.style.textAlign='center';
        this.textContent = `${txt}`;
       
        this.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        
        window.onscroll = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                this.style.display = 'block';
            } else {
                this.style.display = 'none';
            }};}}
class SPB extends HTMLElement {
    connectedCallback() {
        const progressContainer = document.createElement('div');
        const barcolor = this.getAttribute('barcolor');
        const progcolor= this.getAttribute('progresscolor');
        const barheight = this.getAttribute('barheight');
        progressContainer.id = 'progress-container';
        progressContainer.style.position = 'fixed';
        progressContainer.style.top = '0';
        progressContainer.style.left = '0';
        progressContainer.style.width = '100%';
        progressContainer.style.height = barheight;
        progressContainer.style.backgroundColor = barcolor;
        progressContainer.style.zIndex = '9999';
        const progressBar = document.createElement('div');
        progressBar.id = 'progress-bar';
        progressBar.style.height = '100%';
        progressBar.style.backgroundColor = progcolor;
        progressBar.style.width = '0';
        progressContainer.appendChild(progressBar);
        this.appendChild(progressContainer);
        window.addEventListener('scroll', () => {
            const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollPos / totalHeight) * 100;
            progressBar.style.width = progress + '%';
        });
    }
}
customElements.define('blur-it',Blur)
customElements.define('text-popup',Popup);
customElements.define('move-v',AnimateV);
customElements.define('move-h',AnimateH);
customElements.define('rotate-it',Rotate);
customElements.define('rotate-tostart',RotateToStart);
customElements.define("whats-app",Whatsapp);
customElements.define('time-line',Timeline);
customElements.define('scale-h',ScaleH);
customElements.define('scale-v',ScaleV);
customElements.define('scale-it',ScaleBoth);
customElements.define('read-json',ReadJson);
customElements.define('read-xml', ReadXml);
customElements.define('read-csv', ReadCsv);
customElements.define('net-info', NetInfo);
customElements.define('go-up', Goto);
customElements.define('scroll-progress',SPB);
