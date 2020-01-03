import React, { Component, useState } from 'react';
import styled from 'styled-components';


export default function OptionList(props) {

  const [selected, useSelected] = useState(props.selected);
  const [ready, useReady] = useState(props.ready);
  const StyledOption = styled.div`
  height: 40px;
  padding-top:15px;
  font-size: ${(selected) ? ('20px'):('16px')};
  ${ready ? ("color: #8D7AFF;"):("")}
  ${selected ? ("font-weight: bolder;"):("")}

`;
	return (
		<StyledOption>
			{props.name}
		</StyledOption>
	);
} 