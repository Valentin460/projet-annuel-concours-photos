<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MembersPicturesRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MembersPicturesRepository::class)]
#[ApiResource()]
class MembersPictures
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_vote = null;

    #[ORM\ManyToOne(inversedBy: 'membersPictures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Members $pictures = null;

    #[ORM\ManyToOne(inversedBy: 'membersPictures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Pictures $members = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateVote(): ?\DateTimeInterface
    {
        return $this->date_vote;
    }

    public function setDateVote(\DateTimeInterface $date_vote): self
    {
        $this->date_vote = $date_vote;

        return $this;
    }

    public function getPictures(): ?Members
    {
        return $this->pictures;
    }

    public function setPictures(?Members $pictures): self
    {
        $this->pictures = $pictures;

        return $this;
    }

    public function getMembers(): ?Pictures
    {
        return $this->members;
    }

    public function setMembers(Pictures $members): self
    {
        $this->members = $members;

        return $this;
    }
}
