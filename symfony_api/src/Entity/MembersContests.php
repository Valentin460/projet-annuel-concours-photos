<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MembersContestsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MembersContestsRepository::class)]
#[ApiResource]
class MembersContests
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_invitation = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_validate = null;

    #[ORM\ManyToOne(inversedBy: 'membersContests')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Contests $contests = null;

    #[ORM\ManyToOne(inversedBy: 'membersContests')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Members $members = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fonction = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateInvitation(): ?\DateTimeInterface
    {
        return $this->date_invitation;
    }

    public function setDateInvitation(\DateTimeInterface $date_invitation): self
    {
        $this->date_invitation = $date_invitation;

        return $this;
    }

    public function getDateValidate(): ?\DateTimeInterface
    {
        return $this->date_validate;
    }

    public function setDateValidate(\DateTimeInterface $date_validate): self
    {
        $this->date_validate = $date_validate;

        return $this;
    }

    public function getContests(): ?Contests
    {
        return $this->contests;
    }

    public function setContests(?Contests $contests): self
    {
        $this->contests = $contests;

        return $this;
    }

    public function getMembers(): ?Members
    {
        return $this->members;
    }

    public function setMembers(?Members $members): self
    {
        $this->members = $members;

        return $this;
    }

    public function getFonction(): ?string
    {
        return $this->fonction;
    }

    public function setFonction(?string $fonction): self
    {
        $this->fonction = $fonction;

        return $this;
    }
}
