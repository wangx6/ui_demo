import React from 'react'

const titles = [
  { value: 'Health', label: 'menuHealth' },
  { value: 'Travel', label: 'menuTravel' },
  { value: 'Dental', label: 'menuDental' },
  { value: 'Life', label: 'menuLife' },
  { value: 'Swift Care', label: 'menuSwiftCare' },
  { value: 'Claims', label: 'menuClaims' },
  { value: 'Members', label: 'menuMembers' },
  { value: 'Employers', label: 'menuEmployers' },
  { value: 'Blog', label: 'menuBlog' },
]

const onClickTitle = (title) => {
  console.log(title);
}

export default function HeaderMenu() {
  return (
    <div className="lqe-hdr-menu">
      <div className="lqe-hdr-menu__ctr">
        <div className="lqe-hdr-menu__title-list">
          {titles.map(title => <div key={title.value}
            onClick={() => { onClickTitle(title) }}
            className="lqe-hdr-menu__title-item">
            {title.value}
          </div>)
          }
        </div>
      </div>
    </div>
  )
}