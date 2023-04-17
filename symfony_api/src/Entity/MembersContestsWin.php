<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MembersContestsWinRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Context;

#[ORM\Entity(repositoryClass: MembersContestsWinRepository::class)]
#[ApiResource()]
class MembersContestsWin
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $rank_price = null;

    #[ORM\ManyToOne(inversedBy: 'membersContestsWin')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Members $contests = null;

    #[ORM\ManyToOne(inversedBy: 'membersContestsWin')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Contests $members = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRankPrice(): ?int
    {
        return $this->rank_price;
    }

    public function setRankPrice(int $rank_price): self
    {
        $this->rank_price = $rank_price;

        return $this;
    }

    public function getContests(): ?Members
    {
        return $this->contests;
    }

    public function setContests(?Members $contests): self
    {
        $this->contests = $contests;

        return $this;
    }

    public function getMembers(): ?Contests
    {
        return $this->members;
    }

    public function setMembers(?Contests $members): self
    {
        $this->members = $members;

        return $this;
    }
}
