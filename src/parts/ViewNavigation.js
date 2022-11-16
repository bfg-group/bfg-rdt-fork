import React from 'react';

export default function ViewNavigation( { onClickPrev, onClickSwitch, onClickNext, colspan = 4, switchContent, switchProps } ) {
  return (
		<tr>
			<td colSpan={colspan}>
				<div className="rdtViewNavigation">
					<div className="rdtPrev" onClick={onClickPrev}>
						<span>‹</span>
					</div>
					<div className="rdtSwitch" onClick={onClickSwitch} {...switchProps}>
						{ switchContent }
					</div>
					<div className="rdtNext" onClick={onClickNext}>
						<span>›</span>
					</div>
				</div>
			</td>
		</tr>
  );
}
