// import React from 'react'
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import "./footer.css";

// const Footer = () => {
//   return (
//     <div className='footer_outer_container'>
//       <div className='footer_inner_container'>
//         <div className='footer_icons'>
//           <FacebookOutlinedIcon />
//           <InstagramIcon />
//           <YouTubeIcon />
//         </div>
//         <div className='footer_data'>
//           <div>
//             <ul>
//               <li>Audio Description</li>
//               <li>Investor Relations</li>
//               <li>Legal Notice</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <li>Help Center</li>
//               <li>Jobs</li>
//               <li>Cookie Preferences</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <li>Gift Cards</li>
//               <li>Terms of Use</li>
//               <li>Corporate Information</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <li>Media Center</li>
//               <li>Privacy</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>
//         </div>
//         <div className='service_code'>
//           <p>
//             Service Code
//           </p>
//         </div>
//         <div className='copy-write'>
//           &copy; 1997-2024 Netflix, Inc.
//         </div>
//       </div>
//     </div>
//   )
// }

//export default Footer

import React from "react";
import { Link } from 'react-router-dom';
import "./footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__links">
				<ul>
					<li>
						<Link to="/">FAQ</Link>{" "}
					</li>
					<li>
						<Link to="/">Investor Relations</Link>
					</li>
					<li>
						<Link to="/">Ways to Watch</Link>
					</li>
					<li>
						<Link to="/">Corporate Information</Link>
					</li>
					<li>
						<Link to="/">Only on Netflix</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link to="/">Help Center</Link>
					</li>
					<li>
						<Link to="/">Jobs</Link>
					</li>
					<li>
						<Link to="/">Terms of Use</Link>
					</li>
					<li>
						<Link to="/">Contact us</Link>
					</li>
				</ul>

				<ul>
					<li>
						<Link to="/">Account</Link>
					</li>
					<li>
						<Link to="/">Redeem Gift Cards</Link>
					</li>
					<li>
						<Link to="/">Privacy</Link>
					</li>
					<li>
						<Link to="/">Speed Test</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link to="/">Media Center</Link>
					</li>
					<li>
						<Link to="/">Buy Gift Cards</Link>
					</li>
					<li>
						<Link to="/">Cookie Preferences</Link>
					</li>
					<li>
						<Link to="/">Legal Notices</Link>
					</li>
				</ul>
			</div>
			
		</div>
	);
}

export default Footer;