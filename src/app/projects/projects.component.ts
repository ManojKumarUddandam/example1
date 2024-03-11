import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor() {}

  // Method to open additional information in a new window/tab
  openAdditionalInfo(service: string) {
    let additionalInfo = '';
    let imageSrc = '';

    // Generate additional information HTML and image based on the service
    if (service === 'health') {
        additionalInfo = this.generateHealthInfoHtml();
        imageSrc = 'assets/health2.png';
    } else if (service === 'webdev') {
        additionalInfo = this.generateWebDevInfoHtml();
        imageSrc = 'assets/webdev1.png';
    } else if (service === 'webapp') {
        additionalInfo = this.generateWebAppInfoHtml();
        imageSrc = 'assets/project1.png';
    } else if (service === 'ecommerce') {
        additionalInfo = this.generateEcommerceInfoHtml();
        imageSrc = 'assets/ecommerce1.jpg';
    }

    // Open a new window/tab with the additional information
    const newWindow = window.open('', '_blank');
    if (newWindow) {
        // Construct the HTML document
        newWindow.document.write(`
            <html>
            <head>
                <title>Additional Information</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style>
                    /* Add CSS styles here */
                    body { font-family: Arial, sans-serif; 
                    background-color:black;
                    color:white;
                    }
                    h1 { color: blue;
                      padding-left:700px;
                     }
                    p { color: white; }
                    .image{
                      width :60%;
                      height:auto;
                      padding-left:270px;
                      overflow:hidden;
                    }
                    .info{
                      padding-left:60px;
                      padding-right:40px;
                      padding-top:40px;
                      font-size:large;
                      text-align:justify;
                    }
                    button {
                      --glow-color: rgb(217, 176, 255);
                      --glow-spread-color: rgba(191, 123, 255, 0.781);
                      --enhanced-glow-color: rgb(231, 206, 255);
                      --btn-color: rgb(100, 61, 136);
                      border: .25em solid var(--glow-color);
                      padding: 1em 3em;
                      color: var(--glow-color);
                      font-size: 15px;
                      font-weight: bold;
                      background-color: var(--btn-color);
                      border-radius: 1em;
                      outline: none;
                      box-shadow: 0 0 1em .25em var(--glow-color),
                             0 0 4em 1em var(--glow-spread-color),
                             inset 0 0 .75em .25em var(--glow-color);
                      text-shadow: 0 0 .5em var(--glow-color);
                      position: relative;
                      transition: all 0.3s;
                      margin-top:40px;
                      margin-bottom:30px;
                      margin-left:650px;
                     }
                     
                     button::after {
                      pointer-events: none;
                      content: "";
                      position: absolute;
                      top: 120%;
                      left: 0;
                      height: 100%;
                      width: 100%;
                      background-color: var(--glow-spread-color);
                      filter: blur(2em);
                      opacity: .7;
                      transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
                     }
                     
                     button:hover {
                      color: var(--btn-color);
                      background-color: var(--glow-color);
                      box-shadow: 0 0 1em .25em var(--glow-color),
                             0 0 4em 2em var(--glow-spread-color),
                             inset 0 0 .75em .25em var(--glow-color);
                     }
                     
                     button:active {
                      box-shadow: 0 0 0.6em .25em var(--glow-color),
                             0 0 2.5em 2em var(--glow-spread-color),
                             inset 0 0 .5em .25em var(--glow-color);
                     }
                     @media only screen and (max-width: 768px) {
                      h1 {
                          padding-left: 50px;
                      }
                      
                      .image {
                          width: 100%;
                          height:auto;
                          padding-left: 0;
                      }
              
                      .info {
                          padding-left: 2px;
                          padding-right: 2px;
                          overflow:hidden;
                      }
              
                      button {
                        color:white;
                          margin-left: 20%;
                          transform: translateX(-50%);
                      }
                  }
                </style>
            </head>
            <body>
                <h1>${service}</h1>
                <img src="${imageSrc}" alt="${service}" class="image">
                <div class="info">${additionalInfo}</div>
            </body>
            </html>
        `);
        newWindow.document.close();
    } else {
        // Handle popup blocked or not supported
        alert('Popup blocked! Please allow pop-ups for this site.');
    }
}

generateHealthInfoHtml(): string {
    // Here you can dynamically generate the HTML content for the health service
    // For this example, we'll return a hardcoded HTML string with added details
    return `
        <p>Designed and developed a Gesture-Based Health Monitoring System using IoT as a college project, aiming to enhance medical treatment efficiency and simplify caretaker tasks.</p>
        <p>Utilized Python for image processing to implement gesture recognition, allowing for intuitive and hands-free interaction with the monitoring system.</p>
        <p>Integrated IoT devices to capture and transmit data, enabling real-time monitoring of patients' health parameters.</p>
    `;
}

generateWebDevInfoHtml(): string {
    // Similarly, generate HTML content for the web development service
    // For this example, we'll return a hardcoded HTML string
    return `

    <button><a href="https://manoju.netlify.app" >portfolio</a></button>
        <p>"Embarking on the journey of presenting my professional prowess and creative endeavors, 
        I meticulously crafted a captivating portfolio website using Angular. This dynamic platform serves as a digital canvas, 
        meticulously curated to exhibit my projects, accomplishments, and technical proficiency. 
        Leveraging Angular's robust framework, I ensured seamless navigation and responsive design, 
        providing visitors with an immersive and engaging experience. Each section of the portfolio is thoughtfully designed, 
        showcasing a blend of innovative design elements and user-friendly interface. From showcasing past projects to highlighting technical skills,
         the portfolio serves as a comprehensive testament to my capabilities and aspirations. With Angular's versatility, I seamlessly integrated multimedia content and interactive features,
          elevating the portfolio to a dynamic and visually stunning showcase. By embracing Angular's power, I've crafted a platform that not only reflects my professional journey but also inspires and engages visitors with its creativity and functionality."

        </p><br>
        
        
    `;
}
generateWebAppInfoHtml(): string {
    // Here you can dynamically generate the HTML content for the health service
    // For this example, we'll return a hardcoded HTML string with added details
    return `
     <p>
     <li>Developed an active web application using Servlets and JSP for an Online Bookstore, allowing for efficient management of book inventory and customer transactions.</li>
     <li>Implemented a secure login system with two roles to admin, enabling book addition and editing, and customer, enabling browsing and purchasing.</li>
     <li>Integrated backend functionality to process customer orders, manage book availability, and update book details in real-time.</li>
     </p>
     <p>
     The development of an active web application utilizing Servlets and JSP marked a significant stride in enhancing the operations of an Online Bookstore. 
     This dynamic platform facilitated seamless management of book inventory and streamlined customer transactions. Central to its functionality was the implementation of a robust login system, 
     ensuring secure access with distinct roles assigned to administrators and customers. Administrators were empowered with capabilities to add and edit books, while customers were provided access for browsing and purchasing. 
     Furthermore, the backend was meticulously integrated to efficiently process customer orders, monitor book availability, and update book details in real-time. This comprehensive approach not only enhanced the overall user experience 
     but also fortified the system's reliability and security measures, ultimately contributing to the Online Bookstore's success and operational efficiency.
     </p>
    `;
}
generateEcommerceInfoHtml(): string {
    // Here you can dynamically generate the HTML content for the health service
    // For this example, we'll return a hardcoded HTML string with added details
    return `
        <p>
        The development of an e-commerce platform using Angular, 
        coupled with integration with the FakeStore API,
         represents a pioneering endeavor in the realm of online retail. 
         This sophisticated application harnesses the power of Angular's robust framework to create a seamless 
         and immersive shopping experience for users. Leveraging Angular's modular and component-based architecture, 
         the e-commerce platform boasts a responsive and intuitive user interface, ensuring compatibility across various devices and screen sizes.
         </p><br>
         <p>
         At the heart of this e-commerce solution lies the integration with the FakeStore API, 
         a simulated e-commerce API that provides a diverse range of product data. By interfacing with this API,
          the platform dynamically populates its catalog with a rich assortment of products spanning multiple categories, 
          including electronics, clothing, and accessories. This integration not only enriches the product offerings but also ensures that the platform 
          remains up-to-date with the latest inventory and pricing information.
         </p>
        
    `;
}
}
