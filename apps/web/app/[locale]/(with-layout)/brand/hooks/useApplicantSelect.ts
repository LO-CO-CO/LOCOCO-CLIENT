import { useState } from 'react';

import { ApplicantData } from 'types/applicant';

export const useApplicantSelect = (initialData: ApplicantData[]) => {
  const [applicants, setApplicants] = useState<ApplicantData[]>(initialData);

  const handleSelectApplicant = (id: string, selected: boolean) => {
    setApplicants((prev) =>
      prev.map((applicant) =>
        applicant.id === id
          ? { ...applicant, status: selected ? 'selected' : 'default' }
          : applicant
      )
    );
  };

  const handleSelectAll = (selected: boolean) => {
    setApplicants((prev) =>
      prev.map((applicant) => ({
        ...applicant,
        status: selected ? 'selected' : 'default',
      }))
    );
  };

  const selectedApplicants = applicants.filter(
    (applicant) => applicant.status === 'selected'
  );
  const totalCount = applicants.length;
  const selectedCount = selectedApplicants.length;

  return {
    applicants,
    setApplicants,
    handleSelectApplicant,
    handleSelectAll,
    selectedApplicants,
    selectedCount,
    totalCount,
  };
};
