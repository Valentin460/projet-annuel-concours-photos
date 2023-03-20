<?php

namespace App\Repository;

use App\Entity\ConcoursOrganisation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ConcoursOrganisation>
 *
 * @method ConcoursOrganisation|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConcoursOrganisation|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConcoursOrganisation[]    findAll()
 * @method ConcoursOrganisation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConcoursOrganisationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConcoursOrganisation::class);
    }

    public function save(ConcoursOrganisation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ConcoursOrganisation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ConcoursOrganisation[] Returns an array of ConcoursOrganisation objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ConcoursOrganisation
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
