import React from 'react';
import ThickSideBarBox from '../../components/common/sidebarbox/ThickSideBarBox';
import ProfileForm from '../../components/profile/ProfileForm';

function ProfileListForm() {
  // 데이터를 가져와 map으로 component의 profileForm에 넣어주기, pagination으로 한 페이지 4개씩
  // 어떤 정보 불러올 지 논의
  // 사진(없으면 기본 이미지 db나 주소로 가져오나?)/닉네임/한줄소개(최대 글자수 제한)
  // 채팅개수/평균응답/좋아요수 => 몇개 이상이면 +로 표시할지, backend에선 그대로 저장하고 front에서 해줄지
  return <ProfileForm img="" nickname="" bio="" chat_number={7} res_average={7} like={7} />;
}

export default ProfileListForm;
