import React from "react";

function Podcast({color}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 21.8C5.436 20.873 2 16.838 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 16.838 18.564 20.873 14 21.8V19.748C15.8853 19.2612 17.5284 18.1035 18.6212 16.492C19.714 14.8804 20.1816 12.9256 19.9362 10.994C19.6909 9.06237 18.7495 7.28653 17.2885 5.99936C15.8275 4.71218 13.9471 4.00203 12 4.00203C10.0529 4.00203 8.17255 4.71218 6.71153 5.99936C5.25052 7.28653 4.30911 9.06237 4.06376 10.994C3.81841 12.9256 4.28597 14.8804 5.3788 16.492C6.47162 18.1035 8.11468 19.2612 10 19.748V21.8ZM10 17.659C8.66557 17.1872 7.54089 16.2589 6.82474 15.038C6.10858 13.8172 5.84707 12.3825 6.08641 10.9875C6.32575 9.59254 7.05054 8.32707 8.13268 7.41479C9.21482 6.50251 10.5846 6.00215 12 6.00215C13.4154 6.00215 14.7852 6.50251 15.8673 7.41479C16.9495 8.32707 17.6742 9.59254 17.9136 10.9875C18.1529 12.3825 17.8914 13.8172 17.1753 15.038C16.4591 16.2589 15.3344 17.1872 14 17.659V15.465C14.7626 15.0247 15.3586 14.3451 15.6955 13.5316C16.0325 12.7181 16.0916 11.8162 15.8637 10.9656C15.6358 10.1151 15.1336 9.36352 14.435 8.82749C13.7365 8.29145 12.8805 8.0009 12 8.0009C11.1195 8.0009 10.2635 8.29145 9.56495 8.82749C8.86638 9.36352 8.3642 10.1151 8.1363 10.9656C7.9084 11.8162 7.96751 12.7181 8.30448 13.5316C8.64145 14.3451 9.23743 15.0247 10 15.465V17.659ZM13 13.732V22H11V13.732C10.6187 13.5119 10.3207 13.1721 10.1522 12.7653C9.98376 12.3586 9.9542 11.9076 10.0681 11.4823C10.1821 11.057 10.4332 10.6813 10.7825 10.4132C11.1318 10.1452 11.5597 9.99995 12 9.99995C12.4403 9.99995 12.8682 10.1452 13.2175 10.4132C13.5668 10.6813 13.8179 11.057 13.9319 11.4823C14.0458 11.9076 14.0162 12.3586 13.8478 12.7653C13.6793 13.1721 13.3813 13.5119 13 13.732Z"
        fill={color || "#0F172A"}
      />
    </svg>
  );
}

export default Podcast;
